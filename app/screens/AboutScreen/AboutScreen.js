import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './AboutScreenStyle';

export default function AboutScreen (props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>AboutScreen</Text>
		</View>
	);
}




