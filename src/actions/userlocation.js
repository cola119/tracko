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

function loadUserLocationsSuccess(snapshot) {
	return {
		type: 'USERLOCATIONS_RECEIVE_DATA',
		data: snapshot.val()
	};
}
