import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import {
	ExampleScreen,
	LoginScreen,
	SiginScreen,
	WelcomeScreen,
	HomeScreen,
	ProfileScreen,
	TrainersScreen,
	PokemonDetailsScreen,
	AuthLoadingScreen,
} from 'pokedex-rn-2/app/screens';
import { AuthLoadingContainer } from 'pokedex-rn-2/app/containers';

const AppBottomTab = createBottomTabNavigator({ HomeScreen, TrainersScreen, ProfileScreen });
const MainNavigation = createStackNavigator({ AppBottomTab, PokemonDetailsScreen });
const AuthNavigation = createStackNavigator({ WelcomeScreen, LoginScreen, SiginScreen });
const AppNavigation = createSwitchNavigator(
	{ AuthLoadingScreen, App: MainNavigation, Auth: AuthNavigation },
	{ initialRouteName: 'AuthLoadingScreen' },
);
export default createAppContainer(AppNavigation);
