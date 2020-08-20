import ApiService from 'pokedex-rn-2/app/services/ApiService';

// Declare action names as constants with uppercase string
export const FETCH_EXAMPLE_BEGIN = 'FETCH_EXAMPLE_BEGIN';
export const FETCH_EXAMPLE_SUCCESS = 'FETCH_EXAMPLE_SUCCESS';
export const FETCH_EXAMPLE_FAILURE = 'FETCH_EXAMPLE_FAILURE';
export const RESET_EXAMPLE = 'RESET_EXAMPLE';

// Thunk: this is a special type of action that can dispatch other actions
export function fetchExample() {
	return async dispatch => {
		dispatch(fetchExampleBegin());
		dispatch(fetchExampleSuccess({ example: 'example' }));
		// await ApiService.fetchExample()
		// 	.then(
		// 		result => {
		// 			dispatch(fetchExampleSuccess(result));
		// 		},
		// 		error => {
		// 			dispatch(fetchExampleFailure(error));
		// 			throw ({error: error, message: 'This is a demo error message'});
		// 		}
		// 	)
	};
}

// Action: Function that returns an object with action data for reducer
export const fetchExampleBegin = () => ({
	type: FETCH_EXAMPLE_BEGIN,
});
export const fetchExampleSuccess = data => ({
	type: FETCH_EXAMPLE_SUCCESS,
	payload: { data },
});
export const fetchExampleFailure = error => ({
	type: FETCH_EXAMPLE_FAILURE,
	payload: { error },
});
export const resetExample = () => ({
	type: RESET_EXAMPLE,
});
