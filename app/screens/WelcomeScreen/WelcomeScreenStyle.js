import { StyleSheet } from 'react-native';
import {
	//Fonts,
	Colors,
	//Metrics
} from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	opacityBg: {
		zIndex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: Colors.shadow,
		opacity: 0.75,
	},
});
