import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './StatsItemStyle';
import TextComponent from 'pokedex-rn-2/app/components/TextComponent';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'pokedex-rn-2/app/styles';

export default function StatsItem(props) {
	return (
		<View style={[styles.row, styles.flex1]}>
			<View style={{ flex: 0.2 }}>
				<Feather name={props.iconName} size={25} color={Colors[props.color] ?? 'black'} />
			</View>
			<View style={{ flex: 0.4 }}>
				<TextComponent color={Colors[props.color] ?? 'black'} text={props.title} />
			</View>
			<View style={{ flex: 0.4 }}>
				<TextComponent color={Colors[props.color] ?? 'black'} text={props.content} />
			</View>
		</View>
	);
}

StatsItem.propTypes = {
	iconName: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	color: PropTypes.string,
};

StatsItem.defaultProps = {
	iconName: 'feather',
	title: '',
	content: '- - - - - - -',
	color: 'black',
};
