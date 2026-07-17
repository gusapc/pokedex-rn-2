import React, { createContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SessionService from 'pokedex-rn-2/app/services/SessionService';
import NavigationService from 'pokedex-rn-2/app/services/NavigationService';
import { fetchCreateGenericObj, resetCreateGenericObj } from 'pokedex-rn-2/app/actions/CreateGenericObjActions';

const defaultState = {
	isSignedIn: false,
	setIsSignedIn: () => {},
};

export const Context = createContext(defaultState);

export const ContextProvider = ({ children }) => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = SessionService.onAuthStateChanged((currentUser) => {
			setIsSignedIn(!!currentUser);
			if (currentUser) {
				if (currentUser.uid)
					dispatch(fetchCreateGenericObj('TEAM', 'fetchCurrentUserTeam', { uid: currentUser.uid }));
				NavigationService.reset('App');
			} else {
				dispatch(resetCreateGenericObj('TEAM'));
				NavigationService.reset('Auth');
			}
		});
		SessionService.init();
		return unsubscribe;
	}, []);

	return (
		<Context.Provider
			value={{
				isSignedIn,
				setIsSignedIn,
			}}
		>
			{children}
		</Context.Provider>
	);
};
