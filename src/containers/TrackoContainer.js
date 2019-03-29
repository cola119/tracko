import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import Map from '../components/Map'
import LeftDrawer from '../components/LeftDrawer'
import { mapboxConfig } from '../mapbox/config';

class TrackoContainer extends Component {
	componentDidMount() {
		const { actions } = this.props;
		actions.loadClassList();
		actions.loadUserlist();
		actions.loadUserLocations();
	}

	render() {
		const token = mapboxConfig.token;
		const { MapReducer, FirebaseDbReducer, LeftDrawerReducer, actions } = this.props;
		// console.log(LeftDrawerReducer);
		if(FirebaseDbReducer.userlist === undefined || FirebaseDbReducer.userlocations === undefined || FirebaseDbReducer.classlist === undefined) {
			return <div>loading</div>;
		}
		return (
			<div>
				<LeftDrawer
				compName="第n回日本学生オリエンテーリング選手権大会"/>
				<Map
					viewport={MapReducer.viewport}
					token={token}
					onViewportChange={(viewport) => actions.onViewportChange(viewport)}
					users={FirebaseDbReducer.users}
					userlist={FirebaseDbReducer.userlist}
					userlocations={FirebaseDbReducer.userlocations}
					selectedClass={(LeftDrawerReducer.selectedClass === undefined) ? FirebaseDbReducer.classlist['class1'].name : LeftDrawerReducer.selectedClass}/>
			</div>
		);
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
