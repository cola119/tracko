import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import FirebaseDbReducer from './FirebaseDbReducer';
import LeftDrawerReducer from './LeftDrawerReducer';
import BottomSliderReducer from './BottomSliderReducer';
import LiveOrRecFabReducer from './LiveOrRecFabReducer';

const reducer = combineReducers({
	MapReducer,
	FirebaseDbReducer,
	LeftDrawerReducer,
	BottomSliderReducer,
	LiveOrRecFabReducer
});

export default reducer;
