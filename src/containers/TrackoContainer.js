import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import Map from '../components/Map'
import { mapboxConfig } from '../mapbox/config';

class TrackoContainer extends Component {
	render() {
		const token = mapboxConfig.token;
		// const size = { width: "100%", height: 500, }
		// const center = { latitude: 37.7577, longitude: -122.4376, }
		// const zoom = { zoom: 13 }
		// const viewport = { ...size, ...center, ...zoom }

		const { MapReducer, actions } = this.props;
		console.log(this.props);

		return (
			<Map viewport={MapReducer.viewport} token={token} onViewportChange={(viewport) => actions.onViewportChange(viewport)} />
		)
	}
}

const mapStateToProps = state => {
	return state;
};


function mapDispatch(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch),
	};
}


export default connect(mapStateToProps, mapDispatch)(TrackoContainer);
