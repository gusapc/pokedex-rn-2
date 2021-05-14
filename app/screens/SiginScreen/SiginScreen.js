import React, { useState, useRef, useEffect } from 'react';
import {
	View,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert,
	SafeAreaView,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';
import styles from './SiginScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import { TextComponent, PrimaryBtn, InputIcon, HeaderNavbar } from 'pokedex-rn-2/app/components';
import { Feather } from '@expo/vector-icons';
import FirebaseService from 'pokedex-rn-2/app/services/FirebaseService';
import ApiService from 'pokedex-rn-2/app/services/ApiService';
import Faker from 'faker';

export default function SiginScreen(props) {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState(Faker.internet.email());
	const [pass, setPass] = useState(Faker.lorem.word() + ' ' + Faker.lorem.word());
	const inputEmail = useRef('');
	const inputPass = useRef('');
	useEffect(() => {
		inputEmail.current.focus();
	}, []);

	const updateProfile = async () =>
		await ApiService.fetchCharacter()
			.then((response) => {
				const { name, image } = response.data;
				const currentUser = FirebaseService.currentUser();
				currentUser.updateProfile({ displayName: name, photoURL: image });
			})
			.catch((error) => { });

	const sigin = async () => {
		if (isLoading || !(email.length > 0 && pass.length > 0)) return;
		setIsLoading(true);
		FirebaseService.createdUserByEmail(email, pass)
			.then((r) => updateProfile())
			.catch((error) => {
				setIsLoading(false);
				Alert.alert(
					'Ups!! Ha ocurrido un error',
					error.message,
					[
						{
							text: 'OK',
							onPress: () => { },
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
										onSubmitEditing={sigin}
									/>
								</InputIcon>
							</View>
						</View>
						<View />
						<PrimaryBtn
							disabled={!(email.length > 0 && pass.length > 0)}
							bgColor="white"
							onPress={sigin}
							text={isLoading ? 'Registrando...' : 'Registrarse'}
							colorText="blue"
						/>
					</SafeAreaView>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
}
