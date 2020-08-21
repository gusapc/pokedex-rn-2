import React, { createContext, useState, useEffect } from 'react';

const defaultState = {
	isSignedIn: false,
	setIsSignedIn: () => {},
};

export const Context = createContext(defaultState);

export const ContextProvider = ({ children }) => {
	const [isSignedIn, setIsSignedIn] = useState(false);

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
