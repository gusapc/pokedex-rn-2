import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Selectors from 'pokedex-rn-2/app/Selectors';
import { fetchCreateGeneric, reloadCreateGeneric } from 'pokedex-rn-2/app/actions/CreateGenericActions';

export default function PokeListContainer(props) {
	const [lastOffset, setLastOffset] = useState(null);
	const dispatch = useDispatch();
	const error = useSelector(Selectors.selectErrorPokeList);
	const isLoading = useSelector(Selectors.selectIsLoadingPokeList);
	const list = useSelector(Selectors.selectPokeList);
	const fetch = () => {
		if (isLoading) return;
		let offset = list.length;
		if (offset === lastOffset) return;
		setLastOffset(offset);
		dispatch(fetchCreateGeneric('POKE_LIST', 'getPokeList', { limit: 20, offset }));
	};

	const reload = () => {
		if (isLoading) return;
		dispatch(reloadCreateGeneric('POKE_LIST', 'getPokeList', { limit: 20, offset: 0 }));
	};

	useEffect(() => {
		fetch();
	}, []);

	return props.children({ isLoading, error, fetch, reload, list });
}

PokeListContainer.propTypes = {
	// data: PropTypes.array
};

PokeListContainer.defaultProps = {
	// data: []
};
