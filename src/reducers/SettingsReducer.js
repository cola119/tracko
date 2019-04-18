import * as actionTypes from '../utils/actionTypes';

const sliderValueDefault = 1000;

const initialAppState = {
	sliderValue: sliderValueDefault,
	liveFlag: true,
	playRecFlag: false
};


const SettingsReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_BOTTOM_SLIDER_CHANGE:
			// console.log(action.value);
			return {
				...state,
				sliderValue: action.value,
				liveFlag: (action.value === sliderValueDefault) ? true : false
			};
		case actionTypes.ON_LIVEORREC_CHANGE:
			// console.log(action.liveFlag);
			return {
				...state,
				sliderValue: (action.liveFlag) ? state.sliderValue : sliderValueDefault,
				liveFlag: (action.liveFlag) ? true : !action.liveFlag
			};
		case actionTypes.PLAY_REC_SUCCESS:
			// console.log(state.playRecFlag);
			return {
				...state,
				playRecFlag: (state.sliderValue === sliderValueDefault) ? false : !state.playRecFlag
			};
		case actionTypes.PLAY_REC:
			// console.log(state.sliderValue);
			if (Math.ceil(state.sliderValue + 1) === sliderValueDefault) {
				return {
					...state,
					sliderValue: sliderValueDefault,
				}
			}
			return {
				...state,
				sliderValue: (state.playRecFlag) ? state.sliderValue + 1 : Math.ceil(state.sliderValue)
			};
		default:
			return state;
	};
};


export default SettingsReducer;
