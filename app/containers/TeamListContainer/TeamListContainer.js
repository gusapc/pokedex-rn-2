import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TeamsService from 'pokedex-rn-2/app/services/TeamsService';

export default function TeamListContainer(props) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [list, setList] = useState([]);

	const fetch = async () => {
		if (isLoading) return;
		setIsLoading(true);
		await TeamsService.fetchTeams(props.params)
			.then((result) => {
				setList(result);
				setIsLoading(false);
			})
			.catch((e) => {
				setError(e);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		fetch();
	}, []);

	return props.children({ isLoading, error, fetch, reload: fetch, list });
}

TeamListContainer.propTypes = {
	params: PropTypes.object,
};
