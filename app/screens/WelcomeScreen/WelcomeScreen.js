import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './WelcomeScreenStyle';

export default function WelcomeScreen(props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>WelcomeScreen</Text>
			<Button title="Go to LoginScreen" onPress={() => props.navigation.navigate('LoginScreen')} />
			<Button title="Go to SiginScreen" onPress={() => props.navigation.navigate('SiginScreen')} />
		</View>
	);
}
