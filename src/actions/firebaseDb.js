import * as actionTypes from '../utils/actionTypes';
import { firebaseDb } from '../firebase/';

export const loadUserLocations = () => async dispatch => {
	const ref = firebaseDb.ref("user-locations");
	ref.on('value', (snapshot) => {
		dispatch(loadUserLocationsSuccess(snapshot))
	});
}
const loadUserLocationsSuccess = (snapshot) => ({
	type: actionTypes.USERLOCATIONS_RECEIVE_DATA,
	userlocations: snapshot.val()
});

export const loadUserlist = () => async dispatch => {
	const ref = firebaseDb.ref("users");
	ref.once('value', (snapshot) => {
		dispatch(loadUserlistSuccess(snapshot))
	});
}
const loadUserlistSuccess = (snapshot) => ({
	type: actionTypes.USERLIST_RECIEVE_DATA,
	userlist: snapshot.val()
});

export const loadClassList = () => async dispatch => {
	const ref = firebaseDb.ref("classes");
	ref.once('value', (snapshot) => {
		dispatch(loadClassListSuccess(snapshot))
	});
}
const loadClassListSuccess = (snapshot) => ({
	type: actionTypes.CLASSLIST_RECIEVE_DATA,
	classlist: snapshot.val()
});
