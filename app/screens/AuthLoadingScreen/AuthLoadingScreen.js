import React, { useEffect } from 'react';
import { View } from 'react-native';

import styles from './AuthLoadingScreenStyle';

export default function AuthLoadingScreen(props) {
	useEffect(() => {
		props.navigation.navigate('Auth');
	}, []);

	return <View style={styles.container}></View>;
}
