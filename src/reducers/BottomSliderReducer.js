import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
	sliderValue: 100,
};

const BottomSliderReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_BOTTOM_SLIDER_CHANGE:
			// console.log(action.value);
			return {
				...state,
				sliderValue: action.value
			};
		default:
			return state;
	};
}

export default BottomSliderReducer;
