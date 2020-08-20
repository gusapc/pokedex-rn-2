import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';

import styles from './InputIconStyle';

export default function InputIcon(props) {
	return (
		<View style={[styles.wrapper, styles.alignItemsCenter]}>
			<View style={styles.smallVerticalMargin}>
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
