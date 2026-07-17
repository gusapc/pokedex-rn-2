import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ActionSheetStyle';
import TextComponent from 'pokedex-rn-2/app/components/TextComponent';
import Divider from 'pokedex-rn-2/app/components/Divider';

function ActionSheet(props, ref) {
	const [visible, setVisible] = useState(false);

	useImperativeHandle(ref, () => ({
		show: () => setVisible(true),
		hide: () => setVisible(false),
	}));

	const select = (index) => {
		setVisible(false);
		props.onPress(index);
	};

	return (
		<Modal visible={visible} transparent animationType="slide" onRequestClose={() => setVisible(false)}>
			<TouchableWithoutFeedback onPress={() => setVisible(false)}>
				<View style={[styles.overlay, styles.justifyContentFlexEnd]}>
					<View style={[styles.sheet, styles.smallPadding]}>
						{!!props.title && (
							<View style={[styles.smallVerticalMargin]}>
								<TextComponent text={props.title} size="subtitle" color="darkest" align="center" />
							</View>
						)}
						{props.options.map((option, index) => (
							<React.Fragment key={`${option}${index}`}>
								<Divider color="gray" />
								<TouchableOpacity
									style={[styles.option, styles.justifyContentCenter]}
									onPress={() => select(index)}
								>
									<TextComponent
										text={option}
										size="subtitle"
										align="center"
										color={index === props.options.length - 1 ? 'red' : 'highlight'}
									/>
								</TouchableOpacity>
							</React.Fragment>
						))}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
}

export default forwardRef(ActionSheet);

ActionSheet.propTypes = {
	title: PropTypes.string,
	options: PropTypes.array,
	onPress: PropTypes.func,
};
