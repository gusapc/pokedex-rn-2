import Selectors from 'pokedex-rn-2/app/Selectors';
import camelcase from 'camelcase';

const initialState = {
	data: {},
	isLoading: false,
	error: '',
};

export default function CreateGenericObjReducer(modelName) {
	const stateKey = camelcase(modelName, { pascalCase: true });
	Selectors[`selectIsLoading${stateKey}`] = (state) => state[stateKey].isLoading;
	Selectors[`selectError${stateKey}`] = (state) => state[stateKey].error;
	Selectors[`selectData${stateKey}`] = (state) => state[stateKey].data;

	return (state = initialState, action) => {
		switch (action.type) {
			case `FETCH_${modelName}_BEGIN`:
				return {
					...state,
					isLoading: true,
					error: '',
				};
			case `FETCH_${modelName}_SUCCESS`:
				return {
					...state,
					...action.payload,
					isLoading: false,
				};
			case `SET_${modelName}_DATA`:
				return {
					...state,
					data: {
						...state.data,
						...action.payload.data,
					},
				};
			case `FETCH_${modelName}_FAILURE`:
				return {
					...state,
					error: action.payload.error.status,
					isLoading: false,
				};
			case `RESET_${modelName}`:
				return {
					...initialState,
				};
			default:
				return state;
		}
	};
}
