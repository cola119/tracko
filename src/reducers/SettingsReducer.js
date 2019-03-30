import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
	sliderValue: 100,
	liveFlag: true
};

const SettingsReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_BOTTOM_SLIDER_CHANGE:
			// console.log(action.value);
			return {
				...state,
				sliderValue: action.value,
				liveFlag: (action.value === 100) ? true : false
			};
		case actionTypes.ON_LIVEORREC_CHANGE:
			// console.log(action.liveFlag);
			return {
				...state,
				sliderValue: (action.liveFlag) ? state.sliderValue : 100,
				liveFlag: (action.liveFlag) ? true : !action.liveFlag
			};
		default:
			return state;
	};
};


export default SettingsReducer;
