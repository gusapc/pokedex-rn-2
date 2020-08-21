import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	img: {
		width: Metrics.screenWidth / 2,
		height: Metrics.screenWidth / 2,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: 'black',
	},
});
