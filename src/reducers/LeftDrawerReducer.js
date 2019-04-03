import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
	viewallFlags: {},
	mapViewFlag: true,
	pointerRate: 1,
};

const LeftDrawerReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_CLASS_CHANGE:
			return {
				...state,
				selectedClass: action.value.target.value
			};
		case actionTypes.ON_VIEWALL_CHANGE:
			return {
				...state,
				viewallFlags: {
					...state.viewallFlags,
					[action.runner]: (action.viewallFlag === undefined) ? true : !action.viewallFlag
				}
			};
		case actionTypes.ON_MAPVIEW_CHANGE:
			return {
				...state,
				mapViewFlag: !action.mapViewFlag
			};
		case actionTypes.ON_POINTER_RATE_CHANGE:
			return {
				...state,
				pointerRate: action.pointerRate
			};
		default:
			return state;
	};
};

export default LeftDrawerReducer;
