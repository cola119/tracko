import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import EventContainer from './EventContainer';
import Mainpage from '../components/main/Mainpage';
import Aboutpage from '../components/main/Aboutpage';

class TrackoContainer extends Component {
	componentDidMount() {
		const { actions } = this.props;
		actions.loadCompList();
	}

	render() {
		const { FirebaseDbReducer } = this.props;
		if (FirebaseDbReducer.complist === undefined) return <div></div>;
		// console.log(FirebaseDbReducer.complist);
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route exact path='/' render={() => <Mainpage compList={FirebaseDbReducer.complist} />} />
						{/* <Route exact path='/' component={Mainpage} /> */}
						<Route path='/about' component={Aboutpage} />
						<Route path='/events/:id' render={({ match }) => <EventContainer compList={FirebaseDbReducer.complist} match={match} />} />
						<Route component={NoMatch} />
					</Switch>
				</ScrollToTop>

			</BrowserRouter>
		);
	}
}
function NoMatch({ location }) {
	return (
		<div>
			<h3>
				No match for <code>{location.pathname}</code>
			</h3>
		</div>
	);
}

const mapStateToProps = (state) => {
	return state;
};

const mapDispatch = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatch)(TrackoContainer);
