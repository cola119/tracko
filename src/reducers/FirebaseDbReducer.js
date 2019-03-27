import * as actionTypes from '../utils/actionTypes';
import { firebaseDb } from '../firebase/';


const _loadUserLocations = () => {
	const userLocationsRef = firebaseDb.ref("user-locations");
	userLocationsRef.off();
	userLocationsRef.on('value', (snapshot) => {
		console.log(snapshot.val());
		return {
			data: snapshot.val()
		};
	});
};

// きたない
const data = _loadUserLocations();
const initialAppState = {
	data: { data }
};
// const initialAppState = _loadUserLocations();

const FirebaseDbReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.USERLOCATIONS_RECEIVE_DATA:
			const data = _loadUserLocations();
			return {
				...state,
				data: data,
			}
		default:
			return state;
	};
};


export default FirebaseDbReducer;
