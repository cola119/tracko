import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import EventContainer from './EventContainer';
import Mainpage from '../components/main/Mainpage';
import Aboutpage from '../components/main/Aboutpage';

class TrackoContainer extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path='/' component={Mainpage} />
					<Route path='/about' component={Aboutpage} />
					<Route path='/event' component={EventContainer} />
				</div>
			</BrowserRouter>
		);
	}
}

export default TrackoContainer;
