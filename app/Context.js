import React, { createContext, useState } from 'react';

const defaultState = {
	isSignedIn: false,
	setIsSignedIn: () => {},
};

export const Context = createContext(defaultState);

export const ContextProvider = ({ children }) => {
	const [isSignedIn, setIsSignedIn] = useState('');
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
