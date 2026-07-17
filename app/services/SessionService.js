import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION_KEY = '@pokedex/session';
const USERS_KEY = '@pokedex/users';

// Sesión simulada en local: los usuarios y la sesión viven en AsyncStorage,
// currentUser se mantiene en memoria para poder leerlo de forma síncrona.
let currentUser = null;
let listeners = [];

const notify = () => listeners.forEach((listener) => listener(currentUser));

const readUsers = async () => {
	const raw = await AsyncStorage.getItem(USERS_KEY);
	return raw ? JSON.parse(raw) : {};
};

const saveUsers = async (users) => await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));

const saveSession = async () => {
	if (currentUser) await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
	else await AsyncStorage.removeItem(SESSION_KEY);
};

const publicUser = ({ pass, ...user }) => user;

export default {
	currentUser: () => currentUser,

	onAuthStateChanged(listener) {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter((l) => l !== listener);
		};
	},

	async init() {
		const raw = await AsyncStorage.getItem(SESSION_KEY);
		currentUser = raw ? JSON.parse(raw) : null;
		notify();
		return currentUser;
	},

	async authenticateWithEmail(email, pass) {
		const users = await readUsers();
		const user = users[email.trim().toLowerCase()];
		if (!user) throw new Error('No existe una cuenta con ese email, regístrate primero.');
		if (user.pass !== pass) throw new Error('La contraseña es incorrecta.');
		currentUser = publicUser(user);
		await saveSession();
		notify();
		return currentUser;
	},

	async createdUserByEmail(email, pass) {
		const key = email.trim().toLowerCase();
		const users = await readUsers();
		if (users[key]) throw new Error('Ya existe una cuenta con ese email.');
		const user = {
			uid: `${Date.now()}${Math.floor(Math.random() * 1000)}`,
			email: email.trim(),
			displayName: '',
			photoURL: '',
			pass,
		};
		users[key] = user;
		await saveUsers(users);
		currentUser = publicUser(user);
		await saveSession();
		notify();
		return currentUser;
	},

	async updateProfile({ displayName, photoURL }) {
		if (!currentUser) return null;
		currentUser = { ...currentUser, displayName, photoURL };
		const users = await readUsers();
		const key = currentUser.email.toLowerCase();
		if (users[key]) {
			users[key] = { ...users[key], displayName, photoURL };
			await saveUsers(users);
		}
		await saveSession();
		return currentUser;
	},

	async signOut() {
		currentUser = null;
		await saveSession();
		notify();
	},
};
