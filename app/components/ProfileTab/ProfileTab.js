import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import SegmentedControlTab from 'pokedex-rn-2/app/components/SegmentedControlTab';
import styles from './ProfileTabStyle';
import HeaderNavbar from 'pokedex-rn-2/app/components/HeaderNavbar';
import TextComponent from 'pokedex-rn-2/app/components/TextComponent';
import { Feather } from '@expo/vector-icons';
import FirebaseService from 'pokedex-rn-2/app/services/FirebaseService';
import gball from 'pokedex-rn-2/assets/gball.png';
import loading from 'pokedex-rn-2/assets/loading.jpg';
export default function ProfileTab(props) {
	const [email, setEmail] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [photoURL, setPhotoURL] = useState('');

	const signOut = async () => await FirebaseService.signOut();

	useEffect(() => {
		let currentUser = FirebaseService.currentUser();
		setEmail(currentUser.email);
		setDisplayName(currentUser.displayName);
		setPhotoURL(currentUser.photoURL);
	}, []);
	let routeName = props.navigation.state.routes[props.navigation.state.index].routeName;
	return (
		<View style={styles.container}>
			<HeaderNavbar
				statusBar="dark-content"
				left={<React.Fragment></React.Fragment>}
				center={<TextComponent color={'black'} weight={'bold'} size="huge" align="center" text="Perfil" />}
				right={
					<TouchableOpacity
						onPress={() =>
							Alert.alert(
								'Cerrar sesión',
								'¿Seguro que quieres cerrar sesión?',
								[
									{
										text: 'Cancelar',
										onPress: () => {},
										style: 'cancel',
									},
									{ text: 'OK', onPress: () => signOut() },
								],
								{ cancelable: false },
							)
						}
					>
						<Feather name={'log-out'} size={24} color={'black'} />
					</TouchableOpacity>
				}
			/>
			<View style={[styles.row, styles.flex1, styles.justifyContentCenter]}>
				<Image
					style={styles.img}
					source={displayName ? { uri: photoURL } : gball}
					onError={() => {
						setPhotoURL(gball);
					}}
					defaultSource={loading}
				/>
			</View>
			<View style={[styles.smallTopMargin]}>
				<TextComponent size={'title'} text={displayName} color="darkest" weight="medium" align="center" />
				<TextComponent size={'subtitle'} text={email} color="darkest" weight="light" align="center" />
			</View>
			<View style={[styles.smallTopMargin]}>
				<SegmentedControlTab
					rightText={'About'}
					rightName={'AboutScreen'}
					rightAction={() => props.navigation.navigate('AboutScreen')}
					leftText={'Mi equipo'}
					leftName={'TeamScreen'}
					leftAction={() => props.navigation.navigate('TeamScreen')}
					current={routeName}
				/>
			</View>
		</View>
	);
}
