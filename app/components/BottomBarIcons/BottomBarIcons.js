import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Animated, Platform, View } from 'react-native';
import { Colors, Metrics } from 'pokedex-rn-2/app/styles';
import styles from './BottomBarIconsStyle';
import { Feather } from '@expo/vector-icons';
import TextComponent from 'pokedex-rn-2/app/components/TextComponent';

export default function BottomBarIcons(props) {
	const [currentWidth, setCurrentWidth] = useState(new Animated.Value(28));
	const [currentWidthText, setCurrentWidthText] = useState(56);

	useEffect(() => {
		routeNameValue();
	}, []);

	useEffect(() => {
		if (props.isCurrentScreen) {
			handleCurrentWidth();
		} else {
			initWidth();
		}
	}, [props.isCurrentScreen]);

	const routeNameValue = () => {
		if (props.routeName === 'HomeScreen') {
			setCurrentWidthText(Metrics.screenWidth / 6);
			return currentWidthText + 36;
		}
		if (props.routeName === 'TrainersScreen') {
			setCurrentWidthText(Metrics.screenWidth / 6);
			return currentWidthText + 35;
		}
		if (props.routeName === 'ProfileScreen') {
			setCurrentWidthText(Metrics.screenWidth / 6);
			return currentWidthText + 39;
		}
	};

	const handleCurrentWidth = () =>
		Animated.timing(currentWidth, {
			toValue: routeNameValue(),
			duration: 300,
			useNativeDriver: false,
		}).start();

	const initWidth = () =>
		Animated.timing(currentWidth, {
			toValue: 28,
			duration: 300,
			useNativeDriver: false,
		}).start();

	return (
		<TouchableOpacity
			onPress={() => props.onPress()}
			style={[
				styles.alignItemsCenter,
				styles.justifyContentCenter,
				{ width: Metrics.screenWidth / 3, height: Metrics.navBarHeight },
			]}
		>
			<Animated.View style={[styles.row, styles.alignItemsCenter, { width: currentWidth, overflow: 'hidden' }]}>
				<Feather name={props.iconName} size={30} color={Colors[props.color]} />
				<Animated.View style={[styles.smallLeftMargin, { width: currentWidthText, overflow: 'hidden' }]}>
					<View
						style={{
							alignSelf: 'flex-start',
							borderBottomWidth: 1,
							borderBottomColor: Colors[props.color],
						}}
					>
						<TextComponent
							// size={'tiny'}
							lineHeight={4}
							text={props.name}
							color={'white'}
							weight={'bold'}
						/>
					</View>
				</Animated.View>
			</Animated.View>
		</TouchableOpacity>
	);
}
