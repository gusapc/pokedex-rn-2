import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';

import styles from './AuthLoadingScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import * as firebase from 'firebase';
import '@firebase/firestore';

import ENV from 'pokedex-rn-2/config/ENV.js';

export default function AuthLoadingScreen(props) {
	useEffect(() => {
		if (firebase.apps.length === 0) firebase.initializeApp(ENV.config.firebase);
		firebase.auth().onAuthStateChanged((currentUser) => {
			props.navigation.navigate(currentUser ? 'App' : 'Auth');
		});
	}, []);

	return (
		<ImageBackground source={mainBg} style={[styles.fullWidth, styles.fullHeigth]}>
			<View style={styles.container}></View>
		</ImageBackground>
	);
}
