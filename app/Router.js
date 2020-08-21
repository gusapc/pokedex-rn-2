import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import {
	LoginScreen,
	SiginScreen,
	WelcomeScreen,
	HomeScreen,
	TrainersScreen,
	PokemonDetailsScreen,
	AuthLoadingScreen,
	TrainerProfileScreen,
	AboutScreen,
	TeamScreen,
} from 'pokedex-rn-2/app/screens';
import { BottomBar, ProfileTab } from 'pokedex-rn-2/app/components';

const ProfileNavigation = createMaterialTopTabNavigator(
	{
		TeamScreen,
		AboutScreen,
	},
	{ tabBarComponent: ProfileTab, initialRouteName: 'TeamScreen', swipeEnabled: true },
);

const AppBottomTab = createBottomTabNavigator(
	{ HomeScreen, TrainersScreen, ProfileNavigation },
	{ tabBarComponent: BottomBar },
);
const MainNavigation = createStackNavigator(
	{ AppBottomTab, PokemonDetailsScreen, TrainerProfileScreen },
	{ headerMode: 'none' },
);

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
