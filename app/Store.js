import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from 'pokedex-rn-2/app/reducers'

let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store;
