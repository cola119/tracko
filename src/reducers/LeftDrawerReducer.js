import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
	viewallFlags: {}
};

const LeftDrawerReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_CLASS_CHANGE:
			// console.log(action.value.target.value);
			return {
				...state,
				value: action.value.target.value
			};
		case actionTypes.ON_VIEWALL_CHANGE:
			// console.log(action.viewallFlag);
			return {
				...state,
				viewallFlags: {
					...state.viewallFlags,
					[action.runner]: (action.viewallFlag === undefined) ? true : !action.viewallFlag
				}
			};
		default:
			return state;
	};
};

export default LeftDrawerReducer;
