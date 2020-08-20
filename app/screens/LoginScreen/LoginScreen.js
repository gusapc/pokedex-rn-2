import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './LoginScreenStyle';

export default function LoginScreen(props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>LoginScreen</Text>
			<Button title="Go to App" onPress={() => props.navigation.navigate('App')} />
		</View>
	);
}
