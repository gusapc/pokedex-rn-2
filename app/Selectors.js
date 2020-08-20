import { createSelector } from 'reselect'
export default {
	selectExample: createSelector(
		state => state.Example.allIds,
		state => state.Example.byId,
		(allIds, byId) => allIds.map( id => byId[id]),
	),
	selectNormalizedExample: createSelector(
		state => state.Example.allIds,
		state => state.Example.byId,
		(allIds, byId) => ({ allIds, byId }),
	),
	selectIsLoadingExample: state => state.Example.isLoading,
	selectErrorExample: state => state.Example.error,
};