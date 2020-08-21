import React, { useEffect } from 'react'; // useState // useEffect,
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ModalFilterStyle';
import Modal, { SlideAnimation, ModalTitle, ModalContent, ModalFooter } from 'react-native-modals';
import PrimaryBtn from 'pokedex-rn-2/app/components/PrimaryBtn';
import SelectCircleTitle from 'pokedex-rn-2/app/components/SelectCircleTitle';

export default function ModalFilter(props) {
	useEffect(() => {
		props.onPressSuccess();
	}, [props.tempfilter]);
	return (
		<View style={styles.container}>
			<Modal.BottomModal
				modalStyle={{ zIndex: 300 }}
				visible={props.isVisible}
				useNativeDriver={false}
				onTouchOutside={props.onTouchOutside}
			>
				<ModalTitle title={'Filtros'} />
				<ModalContent>
					<View style={[styles.baseHorizontalMargin, styles.baseVerticalMargin]}>
						{props.filtersName.map((item, index) => (
							<React.Fragment key={index}>
								<SelectCircleTitle
									onPress={() => {
										props.selectCircleTitleOnPress(index);
									}}
									name={
										props.filters[index] === props.tempfilter
											? 'check-circle-outline'
											: 'checkbox-blank-circle-outline'
									}
									color={'highlight'}
									text={item}
								/>
							</React.Fragment>
						))}
					</View>
				</ModalContent>
				<ModalFooter>
					<View style={[styles.flex1, styles.row, styles.justifyContentSpaceEvenly]}>
						<View style={[styles.baseHorizontalMargin, styles.baseVerticalMargin, { width: '40%' }]}>
							<PrimaryBtn
								colorText="white"
								bgColor={'redPokeball'}
								text={'Cancelar'}
								onPress={props.onPressCancel}
							/>
						</View>
					</View>
				</ModalFooter>
			</Modal.BottomModal>
		</View>
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

ModalFilter.defaultProps = {
	isVisible: false,
	filtersName: [],
	filters: [],
	tempfilter: '',
	selectCircleTitleOnPress: () => {},
	onTouchOutside: () => {},
	onPressCancel: () => {},
	onPressSuccess: () => {},
};
