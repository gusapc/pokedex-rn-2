import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './PokemonDetailsScreenStyle';

export default function PokemonDetailsScreen (props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>PokemonDetailsScreen</Text>
		</View>
	);
}




