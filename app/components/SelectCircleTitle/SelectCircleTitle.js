import React from 'react'; // useState // useEffect,
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './SelectCircleTitleStyle';
import TextComponent from 'pokedex-rn-2/app/components/TextComponent';
import { Colors } from 'pokedex-rn-2/app/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SelectCircleTitle(props) {
	return (
		<TouchableOpacity onPress={() => props.onPress()} style={[styles.row, styles.alignItemsCenter]}>
			<MaterialCommunityIcons name={props.name} size={30} color={Colors[props.color]} />
			<View style={[styles.baseHorizontalMargin]}>
				<TextComponent text={props.text} />
			</View>
		</TouchableOpacity>
	);
}

SelectCircleTitle.propTypes = {
	// data: PropTypes.array
};

SelectCircleTitle.defaultProps = {
	// data: []
};
