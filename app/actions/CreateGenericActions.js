import ApiService from 'pokedex-rn-2/app/services/ApiService';
import normalizeByKey from 'pokedex-rn-2/app/utils/NormalizeByKey';

export function fetchCreateGeneric(modelName, method, params) {
	return async (dispatch) => {
		dispatch(fetchCreateGenericBegin(modelName));
		await ApiService[method](params)
			.then((data) => {
				let normalized = normalizeByKey(data.results, 'name');
				dispatch(fetchCreateGenericSuccess(modelName, normalized));
			})
			.catch((error) => {
				dispatch(fetchCreateGenericFailure());
			});
	};
}

export function reloadCreateGeneric(modelName, method, params) {
	return async (dispatch) => {
		dispatch(fetchCreateGenericBegin(modelName));
		await ApiService[method](params)
			.then((data) => {
				dispatch(resetCreateGeneric(modelName));
				let normalized = normalizeByKey(data.results, 'name');
				dispatch(fetchCreateGenericSuccess(modelName, normalized));
			})
			.catch((error) => {
				dispatch(fetchCreateGenericFailure());
			});
	};
}

export const fetchCreateGenericBegin = (modelName) => ({
	type: `FETCH_${modelName}_BEGIN`,
});
export const fetchCreateGenericSuccess = (modelName, data) => ({
	type: `FETCH_${modelName}_SUCCESS`,
	payload: data,
});
export const fetchCreateGenericFailure = (modelName, error) => ({
	type: `FETCH_${modelName}_FAILURE`,
	payload: error,
});
export const resetCreateGeneric = (modelName) => ({
	type: `RESET_${modelName}`,
});
