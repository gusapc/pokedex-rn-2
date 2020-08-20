import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './ProfileScreenStyle';

export default function ProfileScreen(props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>ProfileScreen</Text>
			<Button title="Go to Auth" onPress={() => props.navigation.navigate('Auth')} />
		</View>
	);
}
