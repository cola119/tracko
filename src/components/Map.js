import React from 'react';
import ReactMapGL from 'react-map-gl';
import UserPointer from '../components/UserPointer'
import BackgroundImage from '../components/BackgroundImage'

const Map = (props) => {

	return (
		<ReactMapGL
			width='100%'
			height='100vh'
			visible={props.mapViewFlag}
			{...props.viewport}
			mapboxApiAccessToken={props.token}
			onViewportChange={props.onViewportChange}>
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
};

export default Map
