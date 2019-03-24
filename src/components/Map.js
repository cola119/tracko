import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import UserPointer from '../components/UserPointer'

class Map extends Component {
	render() {
		return (
			<ReactMapGL
				{...this.props.viewport}
				mapboxApiAccessToken={this.props.token}
			>
				<UserPointer />
			</ReactMapGL>
		);
	}
}

export default Map
