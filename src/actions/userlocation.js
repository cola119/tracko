import * as actionTypes from '../utils/actionTypes';
import { firebaseDb } from '../firebase/';

const userLocationsRef = firebaseDb.ref("user-locations");

function loadUserLocations() {
	return dispatch => {
		userLocationsRef.off();
		userLocationsRef.on('value', (snapshot) => {
			dispatch(loadUserLocationsSuccess(snapshot))
		});
	};
}

export const loadUserLocationsSuccess = (snapshot) => ({
	type: actionTypes.USERLOCATIONS_RECEIVE_DATA,
	data: snapshot.val()
});
// 
// function loadUserLocationsSuccess(snapshot) {
// 	return {
// 		type: actionTypes.USERLOCATIONS_RECEIVE_DATA,
// 		data: snapshot.val()
// 	};
// }
