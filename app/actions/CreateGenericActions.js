import ApiService from 'pokedex-rn-2/app/services/ApiService';
import normalizeByKey from 'pokedex-rn-2/app/utils/NormalizeByKey';
import normalizeById from 'pokedex-rn-2/app/utils/NormalizeById';

export function fetchFullCreateGeneric(modelName, method, params) {
	return async (dispatch) => {
		dispatch(fetchCreateGenericBegin(modelName));

		await ApiService[method](params)
			.then((data) => {
				const list = data.pokemon_entries.map((i) => {
					let id = i.pokemon_species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '');
					id = id.replace('/', '');
					return { id, ...i.pokemon_species };
				});
				let normalized = normalizeById(list);
				dispatch(fetchCreateGenericSuccess(modelName, normalized));
			})
			.catch((error) => {
				dispatch(fetchCreateGenericFailure());
			});
	};
}

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
