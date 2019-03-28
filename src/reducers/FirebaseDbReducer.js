import * as actionTypes from '../utils/actionTypes';

const initialAppState = {};

const FirebaseDbReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.USERLOCATIONS_RECEIVE_DATA:
			// console.log(action.data);
			return {
				...state,
				data: action.data,
			}
		default:
			return state;
	};
};


export default FirebaseDbReducer;
