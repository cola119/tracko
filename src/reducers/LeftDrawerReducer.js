import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
};

const LeftDrawerReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_CLASS_CHANGE:
			// console.log(action.value.target.value);
			return {
				...state,
				value: action.value.target.value
			};
		default:
			return state;
	};
};

export default LeftDrawerReducer;
