import Selectors from 'pokedex-rn-2/app/Selectors';
import { createSelector } from 'reselect'
import camelcase from 'camelcase';

const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
	meta: {}
};

export default function CreateGenericReducer(modelName) {

	const stateKey = camelcase(modelName, {pascalCase: true});

	Selectors[`select${stateKey}`] = createSelector(
		state => state[stateKey].allIds,
		state => state[stateKey].byId,
		(allIds, byId) => allIds.map( id => byId[id]),
	);

	Selectors[`selectNormalized${stateKey}`] = createSelector(
		state => state[stateKey].allIds,
		state => state[stateKey].byId,
		(allIds, byId) => ({ allIds, byId }),
	);
	Selectors[`selectIsLoading${stateKey}`] = state => state[stateKey].isLoading;
	Selectors[`selectError${stateKey}`] = state => state[stateKey].error;
	Selectors[`selectMeta${stateKey}`] = state => state[stateKey].meta;
	
	return (state = initialState, action) => {
		switch (action.type) {
			case `FETCH_${modelName}_BEGIN`:
				return {
					...state,
					isLoading: true,
					error: ''
				}
			case `FETCH_${modelName}_SUCCESS`:
				let allIds = [...new Set(state.allIds.concat(action.payload.allIds))];
				let byId = {
					...state.byId,
					...action.payload.byId
				};
				let meta = action.payload.meta ? {...state.meta} : {
					...state.meta,
					...action.payload.meta
				}
				return{
					...state,
					allIds,
					byId,
					meta,
					isLoading: false,
				}
			case `FETCH_${modelName}_FAILURE`:
				return {
					...state,
					error: action.payload.error.status,
					isLoading: false
				}
			case `RESET_${modelName}`:
				return {
					...initialState
				}
			default:
				return state;
		}
	}
};
