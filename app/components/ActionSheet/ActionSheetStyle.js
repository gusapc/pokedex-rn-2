import { StyleSheet } from 'react-native';
import { Colors } from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	sheet: {
		backgroundColor: Colors.white,
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
		paddingBottom: 30,
	},
	option: {
		height: 50,
	},
});
