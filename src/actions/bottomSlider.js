import * as actionTypes from '../utils/actionTypes';

export const onBottomSliderChange = (event, value) => ({
	type: actionTypes.ON_BOTTOM_SLIDER_CHANGE,
	value: value
});

let timer = null;
export const playRecStart = (e, sliderValue, playRecFlag) => async dispatch => {
	console.log(sliderValue, playRecFlag);
	clearInterval(timer);
	if(sliderValue < 100 && playRecFlag) {
		timer = setInterval(() => {
			dispatch(playRec(sliderValue))
		}, 1000);
	}
	dispatch(playRecSuccess(sliderValue));
	dispatch(playRec(sliderValue))
}
const playRecSuccess = (sliderValue) => ({
	type: actionTypes.PLAY_REC_SUCCESS,
	sliderValue
});
const playRec = (sliderValue) => ({
	type: actionTypes.PLAY_REC,
	sliderValue
});
