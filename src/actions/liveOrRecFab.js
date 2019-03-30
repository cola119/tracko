import * as actionTypes from '../utils/actionTypes';

export const onLiveOrRecChange = (e, liveFlag) => ({
	type: actionTypes.ON_LIVEORREC_CHANGE,
	liveFlag: liveFlag
});
