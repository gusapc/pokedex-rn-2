import * as firebase from 'firebase';
import '@firebase/firestore';
let store = null;
const getStore = () => {
	if (store) return store;
	store = firebase.firestore();
	return store;
};
export default {
	currentUser: () => firebase.auth().currentUser,
	authenticateWithEmail: (email, pass) => firebase.auth().signInWithEmailAndPassword(email, pass),
	createdUserByEmail: (email, pass) => firebase.auth().createUserWithEmailAndPassword(email, pass),
	signOut: () => firebase.auth().signOut(),
	currentUserTeam: ({ uid }) => getStore().collection('teams').doc(uid),
	fetchCurrentUserTeam: ({ uid }) => getStore().collection('teams').doc(uid).get(),
	fetchTeams({ lastVisible }) {
		let ref = getStore().collection('teams');
		if (lastVisible) ref = ref.startAfter(lastVisible);
		ref = ref.limit(20).get();
		return ref;
	},
};
