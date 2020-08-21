import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './DividerStyle';
import { Colors } from 'pokedex-rn-2/app/styles';

export default function Divider(props) {
	return (
		<View
			style={[
				styles.divider,
				props.addVerticalMargin && styles.smallVerticalMargin,
				props.addHorizontalMargin && styles.baseHorizontalMargin,
				{ backgroundColor: Colors[props.color] },
			]}
		/>
	);
}

Divider.propTypes = {
	addVerticalMargin: PropTypes.bool,
	addHorizontalMargin: PropTypes.bool,
	color: PropTypes.string,
};

Divider.defaultProps = {
	addVerticalMargin: false,
	addHorizontalMargin: false,
	color: 'black',
};
