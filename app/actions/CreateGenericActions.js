export function fetchCreateGeneric() {
	return async dispatch => {
		dispatch(fetchCreateGenericBegin());
		dispatch(fetchCreateGenericSuccess({byId: {1:{ id: 1, suaj:'suaj'}}, allIds: [1],}));
	};
}

// Action: Function that returns an object with action data for reducer
export const fetchCreateGenericBegin = modelName => ({
	type: `FETCH_${modelName}_BEGIN`
});
export const fetchCreateGenericSuccess = (data, modelName) => ({
	type: `FETCH_${modelName}_SUCCESS`,
	payload: { data }
});
export const fetchCreateGenericFailure = (error, modelName) => ({
	type: `FETCH_${modelName}_FAILURE`,
	payload: { error }
});
export const resetCreateGeneric = modelName => ({
	type: `RESET_${modelName}`
});

