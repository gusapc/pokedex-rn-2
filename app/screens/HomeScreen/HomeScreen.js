import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './HomeScreenStyle';

export default function HomeScreen(props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>HomeScreen</Text>
			<Button
				title="Go to PokemonDetailsScreen"
				onPress={() => props.navigation.navigate('PokemonDetailsScreen')}
			/>
		</View>
	);
}
