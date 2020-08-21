import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './BottomBarStyle';
import BottomBarIcons from 'pokedex-rn-2/app/components/BottomBarIcons';
import { Context } from 'pokedex-rn-2/app/Context';

export default function BottomBar(props) {
	const { isSignedIn } = useContext(Context);
	const [routeName, setRouteName] = useState('');
	const nav = useRef(props.navigation);
	useEffect(() => {
		setRouteName(props.navigation.state.routes[props.navigation.state.index].routeName);
	}, [props.navigation.state]);
	return (
		<SafeAreaView style={styles.bottomBar}>
			<View style={[styles.container, styles.row, styles.justifyContentSpaceEvenly, styles.baseBottomMargin]}>
				<BottomBarIcons
					onPress={() => nav.current.navigate('HomeScreen')}
					routeName="HomeScreen"
					isCurrentScreen={routeName === 'HomeScreen'}
					name={'Inicio'}
					iconName="home"
					color="white"
				/>
				<BottomBarIcons
					onPress={() => nav.current.navigate('TrainersScreen')}
					routeName="TrainersScreen"
					isCurrentScreen={routeName === 'TrainersScreen'}
					name={'Amigos'}
					iconName="github"
					color="white"
				/>
				<BottomBarIcons
					onPress={() => nav.current.navigate(isSignedIn ? 'ProfileScreen' : 'Auth')}
					routeName="ProfileScreen"
					isCurrentScreen={routeName === 'ProfileScreen'}
					name={'Perfil'}
					iconName="user"
					color="white"
				/>
			</View>
		</SafeAreaView>
	);
}
