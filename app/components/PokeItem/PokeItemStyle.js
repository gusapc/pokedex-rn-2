import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	img: { width: 60, height: 60 },
});
