import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './ProfileScreenStyle';
import FirebaseService from 'pokedex-rn-2/app/services/FirebaseService';

export default function ProfileScreen(props) {
	const signOut = async () => await FirebaseService.signOut();
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>ProfileScreen</Text>
			<Button title="Go to Auth" onPress={signOut} />
		</View>
	);
}
