import React, { useState, useRef } from 'react';
import { View, ImageBackground, Text, Button, TextInput } from 'react-native';

import styles from './LoginScreenStyle';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import BankayaIcon from 'pokedex-rn-2/assets/BankayaIcon.png';
import { TextComponent, PrimaryBtn, InputIcon } from 'pokedex-rn-2/app/components';

export default function LoginScreen(props) {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const inputEmail = useRef('');
	const inputPass = useRef('');

	return (
		<ImageBackground source={mainBg} style={[styles.fullWidth, styles.fullHeigth]}>
			<View style={[styles.absolute, styles.opacityBg, { zIndex: 0 }]} />
			<View style={[styles.container, styles.flex1, styles.justifyContentSpaceBetween]}>
				<View style={{ height: 100, width: 100 }} />
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
				<InputIcon>
					<TextInput
						ref={inputPass}
						value={pass}
						placeholder={'Contraseña'}
						onChangeText={(text) => setPass(text)}
						returnKeyType="next"
						underlineColorAndroid={'rgba(0, 0, 0, 0)'}
						style={styles.input}
						blurOnSubmit={true}
						placeholderTextColor="#fff"
						onSubmitEditing={() => console.log('')}
					/>
				</InputIcon>
				<Text>LoginScreen</Text>
				<Button title="Go to App" onPress={() => props.navigation.navigate('App')} />
			</View>
		</ImageBackground>
	);
}
