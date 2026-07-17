import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
import { navigationRef } from 'pokedex-rn-2/app/services/NavigationService';

const TopTab = createMaterialTopTabNavigator();
function ProfileNavigation() {
	return (
		<TopTab.Navigator initialRouteName="TeamScreen" tabBarPosition="top" tabBar={(props) => <ProfileTab {...props} />}>
			<TopTab.Screen name="TeamScreen" component={TeamScreen} />
			<TopTab.Screen name="AboutScreen" component={AboutScreen} />
		</TopTab.Navigator>
	);
}

const BottomTab = createBottomTabNavigator();
function AppBottomTab() {
	return (
		<BottomTab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <BottomBar {...props} />}>
			<BottomTab.Screen name="HomeScreen" component={HomeScreen} />
			<BottomTab.Screen name="TrainersScreen" component={TrainersScreen} />
			<BottomTab.Screen name="ProfileNavigation" component={ProfileNavigation} />
		</BottomTab.Navigator>
	);
}

const MainStack = createNativeStackNavigator();
function MainNavigation() {
	return (
		<MainStack.Navigator screenOptions={{ headerShown: false }}>
			<MainStack.Screen name="AppBottomTab" component={AppBottomTab} />
			<MainStack.Screen name="PokemonDetailsScreen" component={PokemonDetailsScreen} />
			<MainStack.Screen name="TrainerProfileScreen" component={TrainerProfileScreen} />
		</MainStack.Navigator>
	);
}

const AuthStack = createNativeStackNavigator();
function AuthNavigation() {
	return (
		<AuthStack.Navigator screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
			<AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
			<AuthStack.Screen name="LoginScreen" component={LoginScreen} />
			<AuthStack.Screen name="SiginScreen" component={SiginScreen} />
		</AuthStack.Navigator>
	);
}

const AuthModalStack = createNativeStackNavigator();
function AuthModalNavigation() {
	return (
		<AuthModalStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
			<AuthModalStack.Screen name="AuthNavigation" component={AuthNavigation} />
			<AuthModalStack.Screen name="AboutScreen" component={AboutScreen} />
		</AuthModalStack.Navigator>
	);
}

const RootStack = createNativeStackNavigator();
export default function AppNavigator() {
	return (
		<NavigationContainer ref={navigationRef}>
			<RootStack.Navigator initialRouteName="AuthLoadingScreen" screenOptions={{ headerShown: false }}>
				<RootStack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
				<RootStack.Screen name="App" component={MainNavigation} />
				<RootStack.Screen name="Auth" component={AuthModalNavigation} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
