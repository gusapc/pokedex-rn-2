import { createNavigationContainerRef, CommonActions, StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

function navigate(routeName, params) {
	if (navigationRef.isReady()) navigationRef.navigate(routeName, params);
}

function push(routeName, params) {
	if (navigationRef.isReady()) navigationRef.dispatch(StackActions.push(routeName, params));
}

function goBack() {
	if (navigationRef.isReady()) navigationRef.goBack();
}

function pop() {
	if (navigationRef.isReady()) navigationRef.dispatch(StackActions.pop());
}

function reset(routeName, retries = 20) {
	if (!navigationRef.isReady()) {
		if (retries > 0) setTimeout(() => reset(routeName, retries - 1), 100);
		return;
	}
	navigationRef.dispatch(
		CommonActions.reset({
			index: 0,
			routes: [{ name: routeName }],
		}),
	);
}

// add other navigation functions that you need and export them

export default {
	navigate,
	push,
	pop,
	goBack,
	reset,
};
