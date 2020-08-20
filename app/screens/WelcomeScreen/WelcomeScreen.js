import React /*{useEffect, useState}*/ from 'react';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './WelcomeScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import BankayaIcon from 'pokedex-rn-2/assets/BankayaIcon.png';
import { TextComponent, PrimaryBtn } from 'pokedex-rn-2/app/components';

export default function WelcomeScreen(props) {
	return (
		<ImageBackground source={mainBg} style={[styles.fullWidth, styles.fullHeigth]}>
			<View style={[styles.absolute, styles.opacityBg, { zIndex: 0 }]} />
			<View style={[styles.container, styles.flex1, styles.justifyContentSpaceBetween]}>
				<View style={[styles.row, styles.doubleVerticalMargin, styles.basePadding]}>
					<Image source={BankayaIcon} style={{ height: 50, width: 50 }} />
					<View style={(styles.flex1, styles.justifyContentCenter, styles.smallLeftMargin)}>
						<TextComponent weight="bold" size="huge" color="white" text="Bankaya Pokedex" />
						<TextComponent color="white" text="Prueba técnica" />
					</View>
				</View>
				<View style={[styles.baseVerticalMargin]}>
					<View style={[styles.smallVerticalMargin]}>
						<PrimaryBtn
							colorText="white"
							bgColor="transparent"
							onPress={() => props.navigation.navigate('SiginScreen')}
							text={'Registrarse'}
						/>
					</View>
					<View style={[styles.baseVerticalMargin]}>
						<PrimaryBtn
							bgColor="blue"
							onPress={() => props.navigation.navigate('LoginScreen')}
							text={'Iniciar sesión'}
							colorText="white"
							borderColor="blue"
						/>
					</View>
					<TouchableOpacity
						styles={styles.doubleVerticalMargin}
						onPress={() => props.navigation.navigate('App')}
					>
						<TextComponent align="center" text="Entrar" color="white" />
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
}
