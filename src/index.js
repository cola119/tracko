import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from "redux-thunk";

import TrackoContainer from './containers/TrackoContainer';
import reducer from './reducers';

import './index.css';

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<TrackoContainer />
	</Provider>,
	document.getElementById('root')
);
