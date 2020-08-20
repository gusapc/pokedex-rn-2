// Action names should be imported from their respective action modules
import {
	GET_EXAMPLE_BEGIN,
	 GET_EXAMPLE_SUCCESS,
	GET_EXAMPLE_FAILURE,
	RESET_EXAMPLE,
} from 'pokedex-rn-2/app/actions/ExampleActions';

//Example initial state
const initialState = {
	ExampleReducer: {},
	isLoading: false,
	error: '' 
};

// Return a new state object with updated attributes
export default function ExampleReducer (state = initialState, action) {
	switch (action.type) {
		case GET_EXAMPLE_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case  GET_EXAMPLE_SUCCESS:
			return {
				...state,
				ExampleReducer: action.payload.data,
				isLoading: false
			}
		case GET_EXAMPLE_FAILURE:
			return {
				...state,
				error: action.payload.error.status,
				isLoading: false
			}
		case RESET_EXAMPLE:
			return {
				...initialState
			}
		default:
			return state;
	}
};

