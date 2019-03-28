import * as actionTypes from '../utils/actionTypes';

const initialAppState = {};

const FirebaseDbReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.USERLOCATIONS_RECEIVE_DATA:
			let userlocations = [];
			Object.keys(action.userlocations).forEach((key) => {
				userlocations[key] = Object.keys(action.userlocations[key]).map(k => action.userlocations[key][k])
			})
			// console.log(userlocations);
			return {
				...state,
				userlocations: userlocations,
			}
		case actionTypes.USERLIST_RECIEVE_DATA:
			// const users = ["user1", "user2"];
			const users = Object.keys(action.userlist);
			return {
				...state,
				users: users,
				userlist: action.userlist,
			}
		default:
			return state;
	};
};


export default FirebaseDbReducer;
