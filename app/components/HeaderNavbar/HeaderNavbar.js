import React from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './HeaderNavbarStyle';
import { Colors } from 'pokedex-rn-2/app/styles';

export default function HeaderNavbar(props) {
	let { bgColor, hideNavBarHeight, left, center, right } = props;
	let bgColorStyle = { backgroundColor: Colors[bgColor] };
	let content = (
		<View
			style={[
				!hideNavBarHeight && styles.navBarHeight,
				styles.row,
				styles.above,
				styles.alignItemsCenter,
				styles.statusBarSpace,
				styles.baseHorizontalPadding,
				Platform.OS === 'android' && { paddingVertical: 4 },
				bgColorStyle,
			]}
		>
			<View
				style={[
					styles.flex1,
					styles.alignItemFlexStart,
					left && center && !right && { flex: 0.2 },
					props.customFlexLeft && { flex: props.customFlexLeft },
				]}
			>
				{left && left}
			</View>
			{center && (
				<View
					style={[
						styles.flex2,
						styles.alignItemsCenter,
						props.customFlexCenter && { flex: props.customFlexCenter },
					]}
				>
					{center}
				</View>
			)}
			{right && (
				<View
					style={[
						styles.flex1,
						styles.alignItemsFlexEnd,
						!left && center && right && { flex: 0.2 },
						props.customFlexRight && { flex: props.customFlexRight },
					]}
				>
					{right}
				</View>
			)}
		</View>
	);

	return (
		<View style={bgColorStyle}>
			<SafeAreaView>{content}</SafeAreaView>
		</View>
	);
}

HeaderNavbar.propTypes = {
	statusBar: PropTypes.string,
	left: PropTypes.object,
	center: PropTypes.object,
	right: PropTypes.object,
	customFlexLeft: PropTypes.number,
	customFlexCenter: PropTypes.number,
	customFlexRight: PropTypes.number,
	bgColor: PropTypes.string,
	hideNavBarHeight: PropTypes.bool,
};

HeaderNavbar.defaultProps = {
	statusBar: 'dark-content',
	left: null,
	center: null,
	right: null,
	bgColor: 'transparent',
	hideNavBarHeight: false,
	customFlexLeft: 0,
	customFlexCenter: 0,
	customFlexRight: 0,
};
