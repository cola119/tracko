import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TrackoContainer from './containers/TrackoContainer';
import reducer from './reducers';
import './index.css';
// import App from './App';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<TrackoContainer />
	</Provider>,
	document.getElementById('root')
);
