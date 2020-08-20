import React /*{useEffect, useState}*/ from 'react';
import { View, ImageBackground, Image } from 'react-native';

import styles from './WelcomeScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import BankayaIcon from 'pokedex-rn-2/assets/BankayaIcon.png';
import { TextComponent } from 'pokedex-rn-2/app/components';

export default function WelcomeScreen(props) {
	console.log(styles.justifyContentSpaceBetween);
	return (
		<ImageBackground source={mainBg} style={[styles.fullWidth, styles.fullHeigth]}>
			<View style={[styles.absolute, styles.opacityBg, { zIndex: 0 }]} />
			<View style={[styles.container, styles.flex1, styles.justifyContentSpaceBetween]}>
				<View style={[styles.row, styles.baseVerticalMargin, styles.basePadding]}>
					<Image source={BankayaIcon} style={{ height: 50, width: 50 }} />
					<View style={(styles.flex1, styles.justifyContentCenter, styles.smallLeftMargin)}>
						<TextComponent weight="bold" size="huge" color="white" text="Bankaya Pokedex" />
						<TextComponent color="white" text="Prueba técnica" />
					</View>
				</View>
				<View style={{ height: 100, width: 100 }}></View>
			</View>
		</ImageBackground>
	);
}

/*
<Button title="Go to LoginScreen" onPress={() => props.navigation.navigate('LoginScreen')} />
<Button title="Go to SiginScreen" onPress={() => props.navigation.navigate('SiginScreen')} />
*/
