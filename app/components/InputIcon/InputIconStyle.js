import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	// ...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 5,
		paddingEnd: 30,
		width: '100%',
	},
	input: {
		padding: 11,
		width: '100%',
		borderWidth: 0,
		color: '#000000',
		width: '100%',
	},
});
