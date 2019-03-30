import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import FirebaseDbReducer from './FirebaseDbReducer';
import LeftDrawerReducer from './LeftDrawerReducer';
import BottomSliderReducer from './BottomSliderReducer';

const reducer = combineReducers({
	MapReducer,
	FirebaseDbReducer,
	LeftDrawerReducer,
	BottomSliderReducer,
});

export default reducer;
