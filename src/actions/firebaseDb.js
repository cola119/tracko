import * as actionTypes from '../utils/actionTypes';
// import { firebaseDb } from '../firebase/';

// const userLocationsRef = firebaseDb.ref("user-locations");
//
// const loadUserLocations = () => {
// 	return dispatch => {
// 		userLocationsRef.off();
// 		userLocationsRef.on('value', (snapshot) => {
// 			dispatch(loadUserLocationsSuccess(snapshot))
// 		});
// 	};
// }
// function loadUserLocations() {
// 	return dispatch => {
// 		userLocationsRef.off();
// 		userLocationsRef.on('value', (snapshot) => {
// 			dispatch(loadUserLocationsSuccess(snapshot))
// 		});
// 	};
// }

// export const loadUserLocations = (snapshot) => ({
// 	type: actionTypes.USERLOCATIONS_RECEIVE_DATA,
// 	data: snapshot
// });
export const loadUserLocations = () => ({
	type: actionTypes.USERLOCATIONS_RECEIVE_DATA,
	// data: snapshot
});
//
// function loadUserLocationsSuccess(snapshot) {
// 	return {
// 		type: actionTypes.USERLOCATIONS_RECEIVE_DATA,
// 		data: snapshot.val()
// 	};
// }
