import * as actionTypes from '../utils/actionTypes';


// const size = { width: "100%", height: "200px", };
const center = { latitude: 35.6053182, longitude: 139.6923339, };
const zoom = { zoom: 13 };

const initialAppState = {
	viewport : { ...center, ...zoom }
	// viewport : { ...size, ...center, ...zoom }
};

const MapReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_VIEWPORT_CHANGE:
			const { width, height, ...etc } = action.viewport
			// console.log(action.viewport);
			return {
				...state,
				viewport: etc
			};
		default:
			return state;
	};
};

export default MapReducer;
