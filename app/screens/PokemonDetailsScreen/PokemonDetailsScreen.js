import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './PokemonDetailsScreenStyle';

export default function PokemonDetailsScreen(props) {
	const name = props.navigation.getParam('name', '');
	const url = props.navigation.getParam('url', '');
	const index = props.navigation.getParam('index', 0);
	console.log({ name, url, index });
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>PokemonDetailsScreen</Text>
		</View>
	);
}
