import { combineReducers } from 'redux';
import Example from 'pokedex-rn-2/app/reducers/ExampleReducer';
import CreateGenericReducer from 'pokedex-rn-2/app/reducers/CreateGenericReducer.js';
import CreateGenericObjReducer from 'pokedex-rn-2/app/reducers/CreateGenericObjReducer';

const rootReducer = combineReducers({
	Example,
	PokeList: CreateGenericReducer('POKE_LIST'),
	Kanto: CreateGenericReducer('KANTO'),
	Johto: CreateGenericReducer('JOHTO'),
	Johto2: CreateGenericReducer('JOHTO2'),
	Hoenn: CreateGenericReducer('HOENN'),
	Hoenn2: CreateGenericReducer('HOENN2'),
	Sinnoh: CreateGenericReducer('SINNOH'),
	Sinnoh2: CreateGenericReducer('SINNOH2'),
	Unova: CreateGenericReducer('UNOVA'),
	Unova2: CreateGenericReducer('UNOVA2'),
	Conquest: CreateGenericReducer('CONQUEST'),
	Kalos: CreateGenericReducer('KALOS'),
	Kalos2: CreateGenericReducer('KALOS2'),
	Alola: CreateGenericReducer('ALOLA'),
	Team: CreateGenericObjReducer('TEAM'),
});

export default rootReducer;
