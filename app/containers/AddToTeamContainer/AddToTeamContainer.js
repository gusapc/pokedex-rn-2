import React, { useRef } from 'react';
import { Alert, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import FirebaseService from 'pokedex-rn-2/app/services/FirebaseService';
import ActionSheet from 'react-native-actionsheet';
import useGenericObj from 'pokedex-rn-2/app/hooks/useGenericObj';

export default function AddToTeamContainer(props) {
	const [infoTeam, infoTeamLoader] = useGenericObj('TEAM', 'fetchCurrentUserTeam');
	const actionSheet = useRef(null);
	let team = infoTeam.data.team ? infoTeam.data.team.map((i) => i.name) : [];

	if (team.length < 6) team.push('Agregar');
	team.push('Cancelar');

	const setNewPokemon = async (index) => {
		let newTeam = infoTeam.data.team ? infoTeam.data.team.map((i) => i) : [];
		newTeam[index] = { ...props };
		let { uid, displayName, photoURL } = FirebaseService.currentUser();

		await FirebaseService.currentUserTeam({ uid })
			.set({ team: newTeam, displayName, photoURL })
			.then((r) => {
				infoTeamLoader.fetch({ uid });
				Alert.alert('Exlente', `Ahora tiene un ${props.name}`, [{ text: 'OK', onPress: () => {} }], {
					cancelable: false,
				});
			})
			.catch((error) => {
				Alert.alert('Ups', 'Algo salio mal intenta mas tarde', [{ text: 'OK', onPress: () => {} }], {
					cancelable: false,
				});
			});
	};

	return (
		<View>
			<Feather onPress={() => actionSheet.current.show()} name={'plus'} size={35} color="white" />
			<ActionSheet
				ref={actionSheet}
				title={'Agregar a tu equipo'}
				options={team}
				onPress={(index) => {
					if (team[index] !== 'Cancelar') setNewPokemon(index);
				}}
			/>
		</View>
	);
}
