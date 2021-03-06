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
		const { actions, match, compList } = this.props;
		if (!Object.keys(compList).includes(match.params.id)) return;
		actions.loadClassList(match.params.id);
		actions.loadUserlist(match.params.id);
		actions.loadUserLocations(match.params.id);
	}

	render() {
		const { match, compList, MapReducer, FirebaseDbReducer, LeftDrawerReducer, SettingsReducer, actions } = this.props;
		if (FirebaseDbReducer.userlist === undefined || FirebaseDbReducer.userlocations === undefined || FirebaseDbReducer.classlist === undefined) {
			return <div>loading</div>;
		}
		if (compList[match.params.id].public === false) return <div>coming soon</div>;

		const center = { latitude: compList[match.params.id].center.lat, longitude: compList[match.params.id].center.long, };

		return (
			<div>
				<Map
					viewport={{ ...center, ...MapReducer.viewport }}
					token={mapboxConfig.token}
					onViewportChange={(viewport) => actions.onViewportChange(viewport)}
					sliderValue={SettingsReducer.sliderValue}
					users={FirebaseDbReducer.users}
					userlist={FirebaseDbReducer.userlist}
					userlocations={FirebaseDbReducer.userlocations}
					viewallFlags={LeftDrawerReducer.viewallFlags}
					selectedClass={(LeftDrawerReducer.selectedClass === undefined) ? FirebaseDbReducer.classlist['class1'].name : LeftDrawerReducer.selectedClass}
					mapViewFlag={LeftDrawerReducer.mapViewFlag}
					pointerRate={LeftDrawerReducer.pointerRate}
					comp={compList[match.params.id]}
				/>
				<LeftDrawer
					compName={compList[match.params.id].name} />
				<BottomSlider
					sliderValue={SettingsReducer.sliderValue}
					onBottomSliderChange={actions.onBottomSliderChange}
					playRecFlag={SettingsReducer.playRecFlag}
					playRecStart={actions.playRecStart}
				/>
				<LiveOrRecFab
					liveFlag={SettingsReducer.liveFlag}
					onLiveOrRecChange={actions.onLiveOrRecChange} />

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
