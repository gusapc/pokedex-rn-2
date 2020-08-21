import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	img: {
		width: Metrics.screenWidth * 0.35,
		height: Metrics.screenWidth * 0.35,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: 'black',
	},
	container: {
		height: Metrics.screenHeight * 0.45,
		backgroundColor: 'white',
	},
});
