import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from 'pokedex-rn-2/app/Store.js';
import NavigationService from 'pokedex-rn-2/app/services/NavigationService.js';
import 'pokedex-rn-2/config/ReactotronConfig';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import BankayaIcon from 'pokedex-rn-2/assets/BankayaIcon.png';
import splash from 'pokedex-rn-2/assets/splash.png';
import { Feather } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import AppNavigator from './app/Router';
import * as Font from 'expo-font';

function cacheFonts(fonts) {
	return fonts.map((font) => Font.loadAsync(font));
}

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		isReady: false,
	};

	async cacheResourcesAsync() {
		const images = [mainBg, BankayaIcon, splash];
		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});
		const fontAssets = cacheFonts([Feather.font]);
		return Promise.all([...cacheImages, ...fontAssets]);
	}
	render() {
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={this.cacheResourcesAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<AppNavigator
						ref={(navigatorRef) => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
					/>
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
