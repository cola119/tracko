import * as actionTypes from '../utils/actionTypes';
import { firebaseDb } from '../firebase/';

export const loadUserLocations = (eventId) => async dispatch => {
	const ref = firebaseDb.ref(eventId+"/user-locations");
	ref.on('value', (snapshot) => {
		dispatch(loadUserLocationsSuccess(snapshot))
	});
}
const loadUserLocationsSuccess = (snapshot) => ({
	type: actionTypes.USERLOCATIONS_RECEIVE_DATA,
	userlocations: snapshot.val()
});

export const loadUserlist = (eventId) => async dispatch => {
	const ref = firebaseDb.ref(eventId+"/users");
	ref.once('value', (snapshot) => {
		dispatch(loadUserlistSuccess(snapshot))
	});
}
const loadUserlistSuccess = (snapshot) => ({
	type: actionTypes.USERLIST_RECIEVE_DATA,
	userlist: snapshot.val()
});

export const loadClassList = (eventId) => async dispatch => {
	const ref = firebaseDb.ref(eventId+"/classes");
	ref.once('value', (snapshot) => {
		dispatch(loadClassListSuccess(snapshot))
	});
}
const loadClassListSuccess = (snapshot) => ({
	type: actionTypes.CLASSLIST_RECIEVE_DATA,
	classlist: snapshot.val()
});

export const loadCompList = () => async dispatch => {
	const ref = firebaseDb.ref("comps");
	ref.once('value', (snapshot) => {
		dispatch(loadCompListSuccess(snapshot))
	});
}
const loadCompListSuccess = (snapshot) => ({
	type: actionTypes.COMPLIST_RECIEVE_DATA,
	complist: snapshot.val()
});
