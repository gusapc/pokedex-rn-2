import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './BottomBarStyle';
import BottomBarIcons from 'pokedex-rn-2/app/components/BottomBarIcons';
import { Context } from 'pokedex-rn-2/app/Context';

export default function BottomBar(props) {
	const { isSignedIn } = useContext(Context);
	const routeName = props.state.routes[props.state.index].name;
	return (
		<SafeAreaView style={styles.bottomBar}>
			<View style={styles.pokePoint} />
			<View style={[styles.container, styles.row, styles.justifyContentSpaceEvenly, styles.baseBottomMargin]}>
				<BottomBarIcons
					onPress={() => props.navigation.navigate('HomeScreen')}
					routeName="HomeScreen"
					isCurrentScreen={routeName === 'HomeScreen'}
					name={'Pokedex'}
					iconName="home"
					color="white"
				/>
				<BottomBarIcons
					onPress={() => props.navigation.navigate('TrainersScreen')}
					routeName="TrainersScreen"
					isCurrentScreen={routeName === 'TrainersScreen'}
					name={'Equipos'}
					iconName="github"
					color="white"
				/>
				<BottomBarIcons
					onPress={() => props.navigation.navigate(isSignedIn ? 'ProfileNavigation' : 'Auth')}
					routeName="ProfileNavigation"
					isCurrentScreen={routeName === 'ProfileNavigation'}
					name={'Perfil'}
					iconName="user"
					color="white"
				/>
			</View>
		</SafeAreaView>
	);
}
