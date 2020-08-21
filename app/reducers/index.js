import { combineReducers } from 'redux';
import Example from 'pokedex-rn-2/app/reducers/ExampleReducer';
import CreateGenericReducer from 'pokedex-rn-2/app/reducers/CreateGenericReducer.js';

const rootReducer = combineReducers({
	Example,
	PokeList: CreateGenericReducer('POKE_LIST'),
	Kanto: CreateGenericReducer('KANTO'),
});

export default rootReducer;
