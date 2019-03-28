import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import Map from '../components/Map'
import { mapboxConfig } from '../mapbox/config';

class TrackoContainer extends Component {
	componentDidMount() {
		const { actions } = this.props;
		actions.loadUserLocations()
	}

	render() {
		const token = mapboxConfig.token;
		const { MapReducer, FirebaseDbReducer, actions } = this.props;
		// console.log(this.props);
		console.log(FirebaseDbReducer.data);
		return (
			<Map viewport={MapReducer.viewport} token={token} onViewportChange={(viewport) => actions.onViewportChange(viewport)} />
		)
	}
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
