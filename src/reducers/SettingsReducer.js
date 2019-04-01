import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
	sliderValue: 100,
	liveFlag: true,
	playRecFlag: false
};

const SettingsReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_BOTTOM_SLIDER_CHANGE:
			console.log(action.value);
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
		case actionTypes.PLAY_REC_SUCCESS:
			// console.log(state.playRecFlag);
			return {
				...state,
				playRecFlag: (state.sliderValue === 100) ? false : !state.playRecFlag
			};
		case actionTypes.PLAY_REC:
			// console.log(state.sliderValue);
			if(Math.ceil(state.sliderValue+1) === 100) {
				return {
					...state,
					sliderValue: 100,
				}
			}
			return {
				...state,
				sliderValue: (state.playRecFlag) ? state.sliderValue+1 : Math.ceil(state.sliderValue)
			};
		default:
			return state;
	};
};


export default SettingsReducer;
