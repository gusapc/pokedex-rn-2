import React from 'react'; // useState // useEffect,
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Fonts, Colors } from 'pokedex-rn-2/app/styles';

export default function TextComponent(props) {
	const textColor = { color: Colors[props.color ?? 'dark'] };
	const weight = { fontWeight: Fonts.weight[props.weight ?? 'regular'] };
	const align = { textAlign: props.align ?? 'left' };
	const size = { fontSize: Fonts.size[props.size ?? 'body'] };

	return (
		<Text {...props} allowFontScaling={false} style={[size, textColor, align, weight]}>
			{props.text}
		</Text>
	);
}

TextComponent.propTypes = {
	text: PropTypes.node,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string,
	size: PropTypes.string,
};

TextComponent.defaultProps = {
	text: '',
	color: 'dark',
	weight: 'regular',
	align: 'left',
	size: 'body',
};
