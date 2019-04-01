import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import Map from '../components/Map';
import LeftDrawer from '../components/LeftDrawer';
import BottomSlider from '../components/BottomSlider';
import LiveOrRecFab from '../components/LiveOrRecFab';
import { mapboxConfig } from '../mapbox/config';

class EventContainer extends Component {
	componentDidMount() {
		const { actions } = this.props;
		actions.loadClassList();
		actions.loadUserlist();
		actions.loadUserLocations();
	}

	render() {
		const token = mapboxConfig.token;
		const { MapReducer, FirebaseDbReducer, LeftDrawerReducer, SettingsReducer, actions } = this.props;
		// const { MapReducer, FirebaseDbReducer, LeftDrawerReducer, BottomSliderReducer, LiveOrRecFabReducer, actions } = this.props;
		// console.log(SettingsReducer);
		if(FirebaseDbReducer.userlist === undefined || FirebaseDbReducer.userlocations === undefined || FirebaseDbReducer.classlist === undefined) {
			return <div>loading</div>;
		}
		return (
			<div>
				<Map
					viewport={MapReducer.viewport}
					token={token}
					onViewportChange={(viewport) => actions.onViewportChange(viewport)}
					sliderValue={SettingsReducer.sliderValue}
					users={FirebaseDbReducer.users}
					userlist={FirebaseDbReducer.userlist}
					userlocations={FirebaseDbReducer.userlocations}
					viewallFlags={LeftDrawerReducer.viewallFlags}
					selectedClass={(LeftDrawerReducer.selectedClass === undefined) ? FirebaseDbReducer.classlist['class1'].name : LeftDrawerReducer.selectedClass}/>
				<LeftDrawer
				compName="第n回日本学生オリエンテーリング選手権大会"/>
				<BottomSlider
					sliderValue={SettingsReducer.sliderValue}
					onBottomSliderChange={actions.onBottomSliderChange}
					playRecFlag={SettingsReducer.playRecFlag}
					playRecStart={actions.playRecStart}
				/>
				<LiveOrRecFab
					liveFlag={SettingsReducer.liveFlag}
					onLiveOrRecChange={actions.onLiveOrRecChange}/>

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

export default connect(mapStateToProps, mapDispatch)(EventContainer);
