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
	data: snapshot.val()
});
