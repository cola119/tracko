import React from 'react';
import ReactMapGL from 'react-map-gl';
import UserPointer from '../components/UserPointer'
import BackgroundImage from '../components/BackgroundImage'

class Map extends React.Component {
	constructor(props) {
		super(props);
		this._handleMapLoaded = this._handleMapLoaded.bind(this);
		this._mapRef = React.createRef();
	}
	_getMap = () => {
		return this._mapRef.current ? this._mapRef.current.getMap() : null;
	}
	_handleMapLoaded = (event) => {
		const map = this._getMap();
		map.addLayer({
			"id": "overlay",
			"source": {
				"type": "image",
				"url": `${process.env.PUBLIC_URL}/img/${this.props.comp.image.name}`,
				"coordinates": [
					[139.6227259, 36.7766127],
					[139.656034, 36.7766127],
					[139.656034, 36.747737],
					[139.6227259, 36.747737]
				]
			},
			"type": "raster",
		});
	}
	render() {
		const props = this.props;
		return (
			<ReactMapGL
				ref={this._mapRef}
				width='100%'
				height='100vh'
				visible={props.mapViewFlag}
				{...props.viewport}
				// mapStyle={mapStyle}
				// onLoad={this._handleMapLoaded}
				mapboxApiAccessToken={props.token}
				onViewportChange={props.onViewportChange}
			>
				<BackgroundImage
					comp={props.comp}
				/>
				{
					props.users.filter((user) => {
						return props.userlist[user].class === props.selectedClass
					}).map((user) => {
						return (
							<UserPointer
								key={user}
								user={user}
								viewallFlag={props.viewallFlags[user]}
								userinfo={props.userlist[user]}
								userlocation={props.userlocations[user]}
								sliderValue={props.sliderValue}
								pointerRate={props.pointerRate}
							/>
						);
					})
				}
			</ReactMapGL>
		);
	}
};

export default Map
