import * as actionTypes from '../utils/actionTypes';

export const onClassChange = (value) => ({
	type: actionTypes.ON_CLASS_CHANGE,
	value: value
});

export const onViewallChange = (e, runner, viewallFlag) => ({
	type: actionTypes.ON_VIEWALL_CHANGE,
	runner: runner,
	viewallFlag: viewallFlag
});

export const onMapViewChange = (e, mapViewFlag) => ({
	type: actionTypes.ON_MAPVIEW_CHANGE,
	mapViewFlag: mapViewFlag,
});

export const onPointerRateChange = (e) => ({
	type: actionTypes.ON_POINTER_RATE_CHANGE,
	pointerRate: e.target.value,
});
