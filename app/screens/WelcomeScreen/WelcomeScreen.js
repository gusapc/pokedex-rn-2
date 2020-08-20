import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';

import styles from './WelcomeScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';

export default function WelcomeScreen(props) {
	return (
		<ImageBackground source={mainBg} style={[styles.fullWidth, styles.fullHeigth]}>
			<View style={[styles.absolute, styles.opacityBg, { zIndex: 0 }]} />
			<View style={styles.container}>
				<View style={{ height: 100, width: 100 }} />
				<Text>WelcomeScreen</Text>
				<Button title="Go to LoginScreen" onPress={() => props.navigation.navigate('LoginScreen')} />
				<Button title="Go to SiginScreen" onPress={() => props.navigation.navigate('SiginScreen')} />
			</View>
		</ImageBackground>
	);
}
