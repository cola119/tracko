import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import FirebaseDbReducer from './FirebaseDbReducer';

const reducer = combineReducers({
	MapReducer,
	FirebaseDbReducer,
});

export default reducer;
