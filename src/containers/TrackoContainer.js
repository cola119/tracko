import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import EventContainer from './EventContainer';
import Mainpage from '../components/Mainpage';

class TrackoContainer extends Component {
	componentDidMount() {
		this.props.actions.loadCompList();
	}

	render() {
		if (this.props.complist === undefined) return <div></div>;
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route exact path='/' render={() => <Mainpage compList={this.props.complist} />} />
						<Route path='/events/:id' render={({ match }) => <EventContainer compList={this.props.complist} match={match} />} />
						<Route component={NoMatch} />
					</Switch>
				</ScrollToTop>

			</BrowserRouter>
		);
	}
}
const NoMatch = ({ location }) => {
	return (
		<div>
			<h3>
				No match for <code>{location.pathname}</code>
			</h3>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		complist: state.FirebaseDbReducer.complist
	};
};

const mapDispatch = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatch)(TrackoContainer);
