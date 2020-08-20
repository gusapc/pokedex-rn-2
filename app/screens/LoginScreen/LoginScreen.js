import React /*{useEffect, useState}*/ from 'react';
import { View, ImageBackground, Text, Button } from 'react-native';

import styles from './LoginScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import BankayaIcon from 'pokedex-rn-2/assets/BankayaIcon.png';
import { TextComponent, PrimaryBtn } from 'pokedex-rn-2/app/components';

export default function LoginScreen(props) {
	return (
		<ImageBackground source={mainBg} style={[styles.fullWidth, styles.fullHeigth]}>
			<View style={[styles.absolute, styles.opacityBg, { zIndex: 0 }]} />
			<View style={[styles.container, styles.flex1, styles.justifyContentSpaceBetween]}>
				<View style={{ height: 100, width: 100 }} />
				<Text>LoginScreen</Text>
				<Button title="Go to App" onPress={() => props.navigation.navigate('App')} />
			</View>
		</ImageBackground>
	);
}
