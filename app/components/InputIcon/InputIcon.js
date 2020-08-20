import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';

import styles from './InputIconStyle';

export default function InputIcon(props) {
	return (
		<View style={[styles.wrapper, styles.alignItemsCenter]}>
			<View style={[styles.smallVerticalMargin, styles.smallHorizontalMargin]}>
				<Feather name={props.iconName} size={25} color={props.tintColor} />
			</View>
			{props.children}
		</View>
	);
}

InputIcon.propTypes = {
	iconName: PropTypes.string,
	tintColor: PropTypes.string,
	textInput: PropTypes.object,
};

InputIcon.defaultProps = {
	iconName: 'user',
	tintColor: 'white',
	textInput: null,
};
