import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiService from 'pokedex-rn-2/app/services/ApiService';
import Reactotron from 'reactotron-react-native';

export default function StatsContainer({ url, children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [data, setData] = useState({ abilities: [], stats: [], types: [] });

	const fetch = async () => {
		setIsLoading(true);
		await ApiService.getPokemonByUrl(url)
			.then((result) => {
				let { abilities, stats, types } = result;
				setData({ abilities, stats, types });
				setIsLoading(false);
			})
			.catch((error) => setError(error));
	};

	useEffect(() => {
		fetch();
	}, []);

	return children({ isLoading, error, ...data });
}

StatsContainer.propTypes = {
	url: PropTypes.string.isRequired,
};

StatsContainer.defaultProps = {};
