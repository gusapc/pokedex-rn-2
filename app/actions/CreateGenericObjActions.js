import TeamsService from 'pokedex-rn-2/app/services/TeamsService';

export function fetchCreateGenericObj(modelName, serviceMethod, params) {
	return async (dispatch) => {
		dispatch(fetchCreateGenericObjBegin(modelName));
		return TeamsService[serviceMethod](params).then(
			(result) => {
				dispatch(fetchCreateGenericObjSuccess(modelName, result ?? {}));
				return result;
			},
			(error) => {
				dispatch(fetchCreateGenericObjFailure(modelName, error));
				return error;
			},
		);
	};
}

export const fetchCreateGenericObjBegin = (modelName) => ({
	type: `FETCH_${modelName}_BEGIN`,
});
export const fetchCreateGenericObjSuccess = (modelName, data) => ({
	type: `FETCH_${modelName}_SUCCESS`,
	payload: { data },
});
export const fetchCreateGenericObjFailure = (modelName, error) => ({
	type: `FETCH_${modelName}_FAILURE`,
	payload: { error },
});
export const resetCreateGenericObj = (modelName) => ({
	type: `RESET_${modelName}`,
});

export const setCreateGenericObjData = (modelName, data) => ({
	type: `SET_${modelName}_DATA`,
	payload: { data },
});
