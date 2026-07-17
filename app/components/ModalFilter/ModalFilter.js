import React, { useEffect } from 'react';
import { Modal, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ModalFilterStyle';
import PrimaryBtn from 'pokedex-rn-2/app/components/PrimaryBtn';
import TextComponent from 'pokedex-rn-2/app/components/TextComponent';
import SelectCircleTitle from 'pokedex-rn-2/app/components/SelectCircleTitle';
import Divider from 'pokedex-rn-2/app/components/Divider';

export default function ModalFilter({
	isVisible = false,
	filtersName = [],
	filters = [],
	tempfilter = '',
	selectCircleTitleOnPress = () => {},
	onTouchOutside = () => {},
	onPressCancel = () => {},
	onPressSuccess = () => {},
}) {
	useEffect(() => {
		onPressSuccess();
	}, [tempfilter]);
	return (
		<Modal visible={isVisible} transparent animationType="slide" onRequestClose={onTouchOutside}>
			<TouchableWithoutFeedback onPress={onTouchOutside}>
				<View style={[styles.overlay, styles.justifyContentFlexEnd]}>
					<TouchableWithoutFeedback>
						<View style={styles.sheet}>
							<View style={[styles.smallVerticalMargin]}>
								<TextComponent text={'Filtros'} size="subtitle" color="darkest" align="center" />
							</View>
							<Divider color="gray" />
							<ScrollView style={styles.sheetContent}>
								<View style={[styles.baseHorizontalMargin, styles.baseVerticalMargin]}>
									{filtersName.map((item, index) => (
										<React.Fragment key={index}>
											<SelectCircleTitle
												onPress={() => {
													selectCircleTitleOnPress(index);
												}}
												name={
													filters[index] === tempfilter
														? 'check-circle-outline'
														: 'checkbox-blank-circle-outline'
												}
												color={'highlight'}
												text={item}
											/>
										</React.Fragment>
									))}
								</View>
							</ScrollView>
							<View style={[styles.flex1, styles.row, styles.justifyContentSpaceEvenly]}>
								<View style={[styles.baseHorizontalMargin, styles.baseVerticalMargin, { width: '40%' }]}>
									<PrimaryBtn
										colorText="white"
										bgColor={'redPokeball'}
										text={'Cancelar'}
										onPress={onPressCancel}
									/>
								</View>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
}

ModalFilter.propTypes = {
	filtersName: PropTypes.array,
	filters: PropTypes.array,
	isVisible: PropTypes.bool,
	tempfilter: PropTypes.string,
	selectCircleTitleOnPress: PropTypes.func,
	onTouchOutside: PropTypes.func,
	onPressCancel: PropTypes.func,
	onPressSuccess: PropTypes.func,
};
