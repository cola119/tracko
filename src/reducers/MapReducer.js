import * as actionTypes from '../utils/actionTypes';

const size = { width: "100%", height: 500, };
const center = { latitude: 37.7577, longitude: -122.4376, };
const zoom = { zoom: 13 };

const initialAppState = {
	viewport : { ...size, ...center, ...zoom }
};

const MapReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_VIEWPORT_CHANGE:
			return {
				...state,
				viewport: action.viewport
			};
		default:
			return state;
	};
};

export default MapReducer;
