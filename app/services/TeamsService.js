import AsyncStorage from '@react-native-async-storage/async-storage';
import Faker from 'faker';

const TEAMS_KEY = '@pokedex/teams';

// Catálogo mínimo para armar equipos demo sin depender de la red.
// prettier-ignore
const demoPokedex = [
	{ index: '1', name: 'Bulbasaur' }, { index: '4', name: 'Charmander' }, { index: '7', name: 'Squirtle' },
	{ index: '25', name: 'Pikachu' }, { index: '39', name: 'Jigglypuff' }, { index: '52', name: 'Meowth' },
	{ index: '54', name: 'Psyduck' }, { index: '68', name: 'Machamp' }, { index: '94', name: 'Gengar' },
	{ index: '95', name: 'Onix' }, { index: '113', name: 'Chansey' }, { index: '130', name: 'Gyarados' },
	{ index: '131', name: 'Lapras' }, { index: '133', name: 'Eevee' }, { index: '143', name: 'Snorlax' },
	{ index: '149', name: 'Dragonite' }, { index: '150', name: 'Mewtwo' }, { index: '6', name: 'Charizard' },
	{ index: '9', name: 'Blastoise' }, { index: '65', name: 'Alakazam' }, { index: '59', name: 'Arcanine' },
	{ index: '112', name: 'Rhydon' }, { index: '123', name: 'Scyther' }, { index: '134', name: 'Vaporeon' },
];

const pokeUrl = (index) => `https://pokeapi.co/api/v2/pokemon/${index}/`;

const buildDemoTeams = () => {
	const teams = {};
	for (let i = 0; i < 8; i++) {
		const uid = `demo-${i + 1}`;
		const size = 3 + Math.floor(Math.random() * 4);
		const picks = [...demoPokedex].sort(() => Math.random() - 0.5).slice(0, size);
		teams[uid] = {
			displayName: Faker.name.findName(),
			photoURL: `https://rickandmortyapi.com/api/character/avatar/${1 + Math.floor(Math.random() * 400)}.jpeg`,
			team: picks.map(({ index, name }) => ({ index, name, url: pokeUrl(index) })),
		};
	}
	return teams;
};

const readTeams = async () => {
	const raw = await AsyncStorage.getItem(TEAMS_KEY);
	if (raw) return JSON.parse(raw);
	const seeded = buildDemoTeams();
	await AsyncStorage.setItem(TEAMS_KEY, JSON.stringify(seeded));
	return seeded;
};

export default {
	async fetchCurrentUserTeam({ uid }) {
		const teams = await readTeams();
		return teams[uid] ?? {};
	},

	async saveCurrentUserTeam({ uid, team, displayName, photoURL }) {
		const teams = await readTeams();
		teams[uid] = { team, displayName, photoURL };
		await AsyncStorage.setItem(TEAMS_KEY, JSON.stringify(teams));
		return teams[uid];
	},

	async fetchTeams() {
		const teams = await readTeams();
		return Object.keys(teams)
			.map((uid) => ({ id: uid, ...teams[uid] }))
			.filter((item) => item.team && item.team.length > 0);
	},
};
