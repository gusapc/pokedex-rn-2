import { StyleSheet } from 'react-native';
import { Metrics, Colors } from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	container: {
		height: Metrics.navBarHeight * 0.8,
		width: '100%',
		borderTopWidth: 1,
		borderTopColor: '#9CADC666',
	},
	bottomBar: { backgroundColor: Colors.redPokeball, borderTopWidth: 10, borderColor: 'black' },
});
