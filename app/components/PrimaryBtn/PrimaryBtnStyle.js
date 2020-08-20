import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	button: {
		borderRadius: 100,
		width: '80%',
		paddingVertical: 10,
	},
});
