import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		width: Metrics.circleIcons.huge,
		height: Metrics.circleIcons.huge,
		borderRadius: Platform.OS === 'ios' ? Metrics.circleIcons.huge / 2 : Metrics.circleIcons.huge,
	},
});
