import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
	liveFlag: true
};

const LiveOrRecFabReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_LIVEORREC_CHANGE:
			console.log(action.liveFlag);
			return {
				...state,
				liveFlag: (action.liveFlag) ? true : !action.liveFlag
			};
		default:
			return state;
	};
};

export default LiveOrRecFabReducer;
