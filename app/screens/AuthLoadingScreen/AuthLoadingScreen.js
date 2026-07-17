import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './AuthLoadingScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';

export default function AuthLoadingScreen() {
	return (
		<ImageBackground source={mainBg} style={[styles.fullWidth, styles.fullHeigth]}>
			<View style={styles.container}></View>
		</ImageBackground>
	);
}
