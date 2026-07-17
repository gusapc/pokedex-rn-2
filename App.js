import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import { Provider } from 'react-redux';
import store from 'pokedex-rn-2/app/Store.js';
import AppNavigator from './app/Router';
import { ContextProvider } from 'pokedex-rn-2/app/Context.js';
import * as Font from 'expo-font';
import mainBg from 'pokedex-rn-2/assets/mainBg.png';
import gball from 'pokedex-rn-2/assets/gball.png';
import loading from 'pokedex-rn-2/assets/loading.webp';
import PokeIcon from 'pokedex-rn-2/assets/PokeIcon.png';
import { Feather } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

function cacheFonts(fonts) {
	return fonts.map((font) => Font.loadAsync(font));
}

export default function App() {
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		const cacheResourcesAsync = async () => {
			const images = [mainBg, PokeIcon, loading, gball];
			const cacheImages = images.map((image) => {
				return Asset.fromModule(image).downloadAsync();
			});
			const fontAssets = cacheFonts([Feather.font]);
			await Promise.all([...cacheImages, ...fontAssets]);
		};
		cacheResourcesAsync()
			.catch(console.warn)
			.finally(() => setIsReady(true));
	}, []);

	if (!isReady) return <View style={styles.container} />;

	return (
		<Provider store={store}>
			<ContextProvider>
				<View style={styles.container}>
					<AppNavigator />
				</View>
			</ContextProvider>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
