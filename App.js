import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from 'pokedex-rn-2/app/Store.js';
import NavigationService from 'pokedex-rn-2/app/services/NavigationService.js';
import 'pokedex-rn-2/config/ReactotronConfig';

import AppNavigator from './app/Router';

export default class App extends Component {
	render() {
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
