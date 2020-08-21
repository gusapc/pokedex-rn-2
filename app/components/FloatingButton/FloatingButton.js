import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'pokedex-rn-2/app/styles';
import styles from './FloatingButtonStyle';
import { Feather } from '@expo/vector-icons';

export default function FloatingButton(props) {
	const backgroundColor = { backgroundColor: Colors[props.bgColor] };
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={[backgroundColor, styles.btn, styles.smallPadding, styles.border]}
			activeOpacity={0.8}
			disabled={props.disabled}
		>
			<Feather name={props.iconName} size={35} color={Colors[props.iconColor]} onPress={props.onPress} />
		</TouchableOpacity>
	);
}

FloatingButton.propTypes = {
	bgColor: PropTypes.string,
	iconColor: PropTypes.string,
	iconName: PropTypes.string,
	disabled: PropTypes.bool,
};
FloatingButton.defaultProps = {
	bgColor: 'gray',
	iconColor: 'white',
	iconName: 'plus',
	disabled: false,
};
