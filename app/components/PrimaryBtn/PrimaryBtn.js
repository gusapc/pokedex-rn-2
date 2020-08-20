import React from 'react'; // useState // useEffect,
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PrimaryBtnStyle';
import { Colors } from 'pokedex-rn-2/app/styles';
import TextComponent from 'pokedex-rn-2/app/components/TextComponent';

export default function PrimaryBtn(props) {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={[
				styles.button,
				styles.alignSelfCenter,
				{
					backgroundColor: Colors[props.bgColor ?? 'white'],
					borderColor: Colors[props.borderColor ?? 'white'],
					borderWidth: 1,
					opacity: props.disabled ? 0.5 : 1,
				},
			]}
			activeOpacity={0.6}
			disabled={props.disabled}
		>
			<TextComponent text={props.text} size="subtitle" align="center" color={props.colorText} weight="regular" />
		</TouchableOpacity>
	);
}

PrimaryBtn.propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	text: PropTypes.string,
	colorText: PropTypes.string,
	bgColor: PropTypes.string,
	borderColor: PropTypes.string,
};

PrimaryBtn.defaultProps = {
	onPress: () => {},
	disabled: false,
	text: 'click me',
	colorText: 'main',
	bgColor: 'white',
	borderColor: 'white',
};
