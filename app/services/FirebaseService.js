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
	authenticateWithEmail: (email, password) => firebase.auth().signInWithEmailAndPassword(email, password),
	signOut: () => firebase.auth().signOut(),
};
