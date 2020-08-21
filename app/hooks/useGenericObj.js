import Selectors from 'pokedex-rn-2/app/Selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchCreateGenericObj,
	resetCreateGenericObj,
	setCreateGenericObjData,
} from 'pokedex-rn-2/app/actions/CreateGenericObjActions';
import camelcase from 'camelcase';
export default function (modelName, fireMethod) {
	const stateKey = camelcase(modelName, { pascalCase: true });
	const dispatch = useDispatch();
	const isLoading = useSelector(Selectors[`selectIsLoading${stateKey}`]);
	const error = useSelector(Selectors[`selectError${stateKey}`]);
	const data = useSelector(Selectors[`selectData${stateKey}`]);
	const fetch = async (params = {}) =>
		fireMethod && !isLoading && (await dispatch(fetchCreateGenericObj(modelName, fireMethod, params)));
	const reset = async () => await dispatch(resetCreateGenericObj(modelName));
	const setData = async (data) => await dispatch(setCreateGenericObjData(modelName, data));
	return [
		{ isLoading, error, data },
		{ fetch, reset, setData },
	];
}
