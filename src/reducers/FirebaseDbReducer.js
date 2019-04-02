import * as actionTypes from '../utils/actionTypes';

const initialAppState = {};

const FirebaseDbReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.USERLOCATIONS_RECEIVE_DATA:
		// console.log(action.userlocations);
			if(action.userlocations === null) return state;
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
			const users = Object.keys(action.userlist);
			return {
				...state,
				users: users,
				userlist: action.userlist,
			}
		case actionTypes.CLASSLIST_RECIEVE_DATA:
			const classes = Object.keys(action.classlist);
			return {
				...state,
				classes: classes,
				classlist: action.classlist,
			}
		case actionTypes.COMPLIST_RECIEVE_DATA:
			const comps = Object.keys(action.complist);
			return {
				...state,
				comps: comps,
				complist: action.complist,
			}
		default:
			return state;
	};
};


export default FirebaseDbReducer;
