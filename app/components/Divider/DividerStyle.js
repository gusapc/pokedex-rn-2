import { StyleSheet } from 'react-native';
import { Colors } from 'pokedex-rn-2/app/styles';
import { ApplicationStyles } from 'pokedex-rn-2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.margins,
	divider: {
		height: 1,
		width: '100%',
		backgroundColor: Colors.gray,
	},
});
