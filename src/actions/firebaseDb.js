import * as actionTypes from '../utils/actionTypes';
import { firebaseDb } from '../firebase/';

export const loadUserLocations = () => async dispatch => {
	const userLocationsRef = firebaseDb.ref("user-locations");
	userLocationsRef.on('value', (snapshot) => {
		dispatch(loadUserLocationsSuccess(snapshot))
	});
}
export const loadUserLocationsSuccess = (snapshot) => ({
	type: actionTypes.USERLOCATIONS_RECEIVE_DATA,
	userlocations: snapshot.val()
});

export const loadUserlist = () => async dispatch => {
	const userLocationsRef = firebaseDb.ref("users");
	userLocationsRef.once('value', (snapshot) => {
		dispatch(loadUserlistSuccess(snapshot))
	});
}
export const loadUserlistSuccess = (snapshot) => ({
	type: actionTypes.USERLIST_RECIEVE_DATA,
	userlist: snapshot.val()
});
