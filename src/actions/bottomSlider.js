import * as actionTypes from '../utils/actionTypes';

export const onBottomSliderChange = (event, value) => ({
	type: actionTypes.ON_BOTTOM_SLIDER_CHANGE,
	value: value
});
