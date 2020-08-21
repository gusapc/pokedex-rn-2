import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FirebaseService from 'pokedex-rn-2/app/services/FirebaseService';

export default function FireListContainer(props) {
	const [lastVisible, setLastVisible] = useState(props.lastVisible);
	const [limit, setLimit] = useState(20);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [list, setList] = useState([]);
	const fetch = async () => {
		if (isLoading) return;
		if (limit < 20) {
			setLastVisible(null);
			setLimit(0);
			return;
		}
		setIsLoading(true);
		await FirebaseService[props.fireMethod]({ ...props.params, lastVisible })
			.then((result) => {
				let tempList = [];
				result.docs.forEach((doc) => tempList.push({ ...doc.data(), id: doc.id }));
				setLastVisible(result.docs[result.docs.length - 1]);
				setLimit(result.docs.length);
				setList([...new Set(list.concat(tempList))]);
				setIsLoading(false);
			})
			.catch((e) => {
				setLastVisible(null);
				setLimit(20);
				setError(e);
				setIsLoading(false);
			});
	};

	const reload = async () => {
		if (isLoading) return;
		setIsLoading(true);
		await FirebaseService[props.fireMethod]({ ...props.params, lastVisible: null })
			.then((result) => {
				let tempList = [];
				result.docs.forEach((doc) => tempList.push({ ...doc.data(), id: doc.id }));
				setLastVisible(result.docs[result.docs.length - 1]);
				setLimit(result.docs.length);
				setList(tempList);
				setTimeout(() => setIsLoading(false), 100);
			})
			.catch((e) => {
				setLastVisible(null);
				setLimit(20);
				setError(e);
				setTimeout(() => setIsLoading(false), 100);
			});
	};

	useEffect(() => {
		fetch();
	}, []);
	return props.children({ isLoading, error, fetch, reload, list });
}

FireListContainer.propTypes = {
	fireMethod: PropTypes.string.isRequired,
	params: PropTypes.object,
};

FireListContainer.defaultProps = {
	params: {},
};
