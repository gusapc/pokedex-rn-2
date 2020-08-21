import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Selectors from 'pokedex-rn-2/app/Selectors';
import { fetchFullCreateGeneric } from 'pokedex-rn-2/app/actions/CreateGenericActions';

const regions = {
	Kanto: '2',
};

export default function PokeonByRegionContainer({ children, modelName }) {
	const dispatch = useDispatch();
	const isLoading = useSelector(Selectors[`selectIsLoading${modelName}`]);
	const error = useSelector(Selectors[`selectError${modelName}`]);
	const list = useSelector(Selectors[`select${modelName}`]);
	const fetch = () =>
		!isLoading &&
		dispatch(
			fetchFullCreateGeneric(modelName.toUpperCase(), 'getPokeListByRegion', {
				regionId: regions[modelName] ?? '1',
			}),
		);

	useEffect(() => {
		fetch();
	}, []);

	return children({ isLoading, error, fetch, reload: fetch, list });
}

PokeonByRegionContainer.propTypes = {
	modelName: PropTypes.string.isRequired,
};

PokeonByRegionContainer.defaultProps = {};
