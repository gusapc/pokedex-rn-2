import React, { useState, useRef } from 'react';
import { View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './SiginScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import { TextComponent, PrimaryBtn, InputIcon, HeaderNavbar } from 'pokedex-rn-2/app/components';
import { Feather } from '@expo/vector-icons';

export default function SiginScreen(props) {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const inputEmail = useRef('');
	const inputPass = useRef('');

	return (
		<ImageBackground source={mainBg} style={[styles.fullWidth, styles.fullHeigth]}>
			<View style={[styles.absolute, styles.opacityBg, { zIndex: 0 }]} />
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<View style={[styles.container, styles.flex1, styles.justifyContentSpaceBetween, styles.baseMargin]}>
					<HeaderNavbar
						left={
							<Feather
								onPress={() => props.navigation.navigate('WelcomeScreen')}
								name={'chevron-left'}
								size={25}
								color="white"
							/>
						}
						right={
							<TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')}>
								<TextComponent text="Iniciar sesión" color="white" />
							</TouchableOpacity>
						}
					/>
					<View />
					<View style={styles.baseHorizontalMargin}>
						<View style={styles.smallVerticalMargin}>
							<TextComponent align="center" text="Completa tus datos" size="title" color="white" />
						</View>
						<View style={styles.smallVerticalMargin}>
							<InputIcon>
								<TextInput
									ref={inputEmail}
									value={email}
									placeholder={'Email'}
									onChangeText={(text) => setEmail(text)}
									returnKeyType="next"
									underlineColorAndroid={'rgba(0, 0, 0, 0)'}
									style={styles.input}
									blurOnSubmit={true}
									placeholderTextColor="#fff"
									onSubmitEditing={() => inputPass.current.focus()}
								/>
							</InputIcon>
						</View>
						<View style={styles.smallVerticalMargin}>
							<InputIcon iconName={'lock'}>
								<TextInput
									ref={inputPass}
									value={pass}
									placeholder={'Contraseña'}
									onChangeText={(text) => setPass(text)}
									returnKeyType="next"
									underlineColorAndroid={'rgba(0, 0, 0, 0)'}
									style={styles.input}
									secureTextEntry
									blurOnSubmit={true}
									placeholderTextColor="#fff"
									onSubmitEditing={() => props.navigation.navigate('App')}
								/>
							</InputIcon>
						</View>
					</View>
					<View />
					<PrimaryBtn
						disabled={email.length > 0 && pass.length > 0}
						bgColor="white"
						onPress={() => props.navigation.navigate('App')}
						text={'Registrarse'}
						colorText="blue"
					/>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}
