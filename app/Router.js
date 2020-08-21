import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import {
	LoginScreen,
	SiginScreen,
	WelcomeScreen,
	HomeScreen,
	ProfileScreen,
	TrainersScreen,
	PokemonDetailsScreen,
	AuthLoadingScreen,
} from 'pokedex-rn-2/app/screens';
import { BottomBar } from 'pokedex-rn-2/app/components';
const AppBottomTab = createBottomTabNavigator(
	{ HomeScreen, TrainersScreen, ProfileScreen },
	{ tabBarComponent: BottomBar },
);
const MainNavigation = createStackNavigator({ AppBottomTab, PokemonDetailsScreen }, { headerMode: 'none' });

const AuthNavigation = createStackNavigator(
	{
		WelcomeScreen,
		LoginScreen,
		SiginScreen,
	},
	{
		headerMode: 'none',
		defaultNavigationOptions: {
			...TransitionPresets.FadeFromBottomAndroid,
		},
	},
);
const AppNavigation = createSwitchNavigator(
	{ AuthLoadingScreen, App: MainNavigation, Auth: AuthNavigation },
	{ initialRouteName: 'AuthLoadingScreen' },
);
export default createAppContainer(AppNavigation);
