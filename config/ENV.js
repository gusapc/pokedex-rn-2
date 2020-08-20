import Constants from 'expo-constants';
var ENV = {};
const releaseChannel = Constants.manifest.releaseChannel;
if (releaseChannel && releaseChannel.indexOf('prod') !== -1) {
	ENV.config = {
		firebase: {
			apiKey: 'AIzaSyC-TGAF5-HYRdHNl-p7cx5dFmDDqT2fMEQ',
			authDomain: 'pokedex-rn-2.firebaseapp.com',
			databaseURL: 'https://pokedex-rn-2.firebaseio.com',
			projectId: 'pokedex-rn-2',
			storageBucket: 'pokedex-rn-2.appspot.com',
			messagingSenderId: '604220397541',
			appId: '1:604220397541:web:15fc8d14630e668442c10c',
			measurementId: 'G-GDQR9YHE7P',
		},
	};
} else {
	ENV.config = {
		firebase: {
			apiKey: 'AIzaSyC-TGAF5-HYRdHNl-p7cx5dFmDDqT2fMEQ',
			authDomain: 'pokedex-rn-2.firebaseapp.com',
			databaseURL: 'https://pokedex-rn-2.firebaseio.com',
			projectId: 'pokedex-rn-2',
			storageBucket: 'pokedex-rn-2.appspot.com',
			messagingSenderId: '604220397541',
			appId: '1:604220397541:web:15fc8d14630e668442c10c',
			measurementId: 'G-GDQR9YHE7P',
		},
	};
}
export default ENV;
