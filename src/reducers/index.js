import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import FirebaseDbReducer from './FirebaseDbReducer';
import LeftDrawerReducer from './LeftDrawerReducer';

const reducer = combineReducers({
	MapReducer,
	FirebaseDbReducer,
	LeftDrawerReducer,
});

export default reducer;
