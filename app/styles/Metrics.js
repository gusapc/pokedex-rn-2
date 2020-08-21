import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
	doubleBaseMargin: 32,
	baseMargin: 16,
	smallMargin: 8,
	tinyMargin: 4,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	navBarHeight: Platform.OS === 'ios' ? 64 : 79,
	statusBarHeight: StatusBar.currentHeight,
	buttonRadius: 10,
	icons: {
		small: 16,
		regular: 24,
		large: 48,
	},
	circleIcons: {
		ultraHuge: 160,
		extraHuge: width < 375 ? 120 : 136,
		bigHuge: 80,
		bighuge: 80,
		big: 70,
		huge: 50,
		base: 40,
		small: 32,
		tiny: 24,
	},
};

export default metrics;
