import React, { useRef } from 'react';
import { Alert, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import SessionService from 'pokedex-rn-2/app/services/SessionService';
import TeamsService from 'pokedex-rn-2/app/services/TeamsService';
import ActionSheet from 'pokedex-rn-2/app/components/ActionSheet';
import useGenericObj from 'pokedex-rn-2/app/hooks/useGenericObj';

export default function AddToTeamContainer(props) {
	const [infoTeam, infoTeamLoader] = useGenericObj('TEAM', 'fetchCurrentUserTeam');
	const actionSheet = useRef(null);
	let team = infoTeam.data.team ? infoTeam.data.team.map((i) => i.name) : [];

	if (team.length < 6) team.push('Agregar');
	team.push('Cancelar');

	const setNewPokemon = async (index) => {
		let newTeam = infoTeam.data.team ? infoTeam.data.team.map((i) => i) : [];
		newTeam[index] = { name: props.name, url: props.url, index: props.index };
		let { uid, displayName, photoURL } = SessionService.currentUser();

		await TeamsService.saveCurrentUserTeam({ uid, team: newTeam, displayName, photoURL })
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
