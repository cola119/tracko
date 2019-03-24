import React, { Component } from 'react';
import Map from '../components/Map'
import {mapboxConfig} from '../mapbox/config';

class TrackoContainer extends Component {
	render() {
		const token = mapboxConfig.token;
		const size = { width: "100%", height: 500, }
		const center = { latitude: 37.7577, longitude: -122.4376, }
		const zoom = { zoom: 13 }
		const viewport = { ...size, ...center, ...zoom }

		return (
			<Map viewport={viewport} token={token} />
		)
	}
}

export default TrackoContainer;
