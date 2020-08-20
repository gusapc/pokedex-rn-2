import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './SiginScreenStyle';

export default function SiginScreen(props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>SiginScreen</Text>
			<Button title="Go to App" onPress={() => props.navigation.navigate('App')} />
		</View>
	);
}
