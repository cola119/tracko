import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import Map from '../components/Map'
import { mapboxConfig } from '../mapbox/config';

class TrackoContainer extends Component {
	componentDidMount() {
		const { actions } = this.props;
		actions.loadUserlist();
		actions.loadUserLocations();
	}

	render() {
		const token = mapboxConfig.token;
		const { MapReducer, FirebaseDbReducer, actions } = this.props;
		// console.log(this.props);
		// console.log(FirebaseDbReducer.userlist);
		// console.log(FirebaseDbReducer.userlocations);
		if(FirebaseDbReducer.userlist === undefined || FirebaseDbReducer.userlocations === undefined) {
			return <div>loading</div>
		} else {
			return (
				<Map
					viewport={MapReducer.viewport}
					token={token}
					onViewportChange={(viewport) => actions.onViewportChange(viewport)}
					users={FirebaseDbReducer.users}
					userlist={FirebaseDbReducer.userlist}
					userlocations={FirebaseDbReducer.userlocations} />
			)
		}

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
