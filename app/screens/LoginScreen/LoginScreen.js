import React, { useState, useRef } from 'react';
import {
	View,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert,
	Keyboard,
	SafeAreaView,
	TouchableWithoutFeedback,
} from 'react-native';
import styles from './LoginScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import { TextComponent, PrimaryBtn, InputIcon, HeaderNavbar } from 'pokedex-rn-2/app/components';
import { Feather } from '@expo/vector-icons';
import FirebaseService from 'pokedex-rn-2/app/services/FirebaseService';

export default function LoginScreen(props) {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const inputEmail = useRef('');
	const inputPass = useRef('');

	const login = async () => {
		if (isLoading || !(email.length > 0 && pass.length > 0)) return;
		setIsLoading(true);
		FirebaseService.authenticateWithEmail(email, pass)
			.then((r) => {})
			.catch((error) => {
				setIsLoading(false);
				Alert.alert(
					'Ups!! Ha ocurrido un error',
					error.message,
					[
						{
							text: 'OK',
							onPress: () => {},
						},
					],
					{ cancelable: false },
				);
			});
	};

	return (
		<ImageBackground source={mainBg} style={[styles.fullWidth, styles.fullHeigth]}>
			<View style={[styles.absolute, styles.opacityBg, { zIndex: 0 }]} />
			<TouchableWithoutFeedback onPressOut={() => Keyboard.dismiss()}>
				<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
					<SafeAreaView
						style={[
							styles.container,
							styles.flex1,
							styles.justifyContentSpaceBetween,
							styles.smallHorizontalMargin,
							styles.smallBottomMargin,
						]}
					>
						<HeaderNavbar
							left={
								<Feather
									onPress={() => props.navigation.navigate('WelcomeScreen')}
									name={'chevron-left'}
									size={35}
									color="white"
								/>
							}
							right={
								<TouchableOpacity onPress={() => props.navigation.navigate('SiginScreen')}>
									<TextComponent text="Registrarse" color="white" />
								</TouchableOpacity>
							}
						/>
						<View />
						<View style={styles.baseHorizontalMargin}>
							<View style={styles.smallVerticalMargin}>
								<TextComponent
									align="center"
									text="Completa tus credenciales"
									size="title"
									color="white"
								/>
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
										editable={!isLoading}
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
										editable={!isLoading}
										secureTextEntry
										blurOnSubmit={true}
										placeholderTextColor="#fff"
										onSubmitEditing={login}
									/>
								</InputIcon>
							</View>
						</View>
						<View />
						<PrimaryBtn
							disabled={!(email.length > 0 && pass.length > 0)}
							bgColor="blue"
							onPress={login}
							text={isLoading ? 'Iniciando...' : 'Iniciar sesión'}
							colorText="white"
							borderColor="blue"
						/>
					</SafeAreaView>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
}
