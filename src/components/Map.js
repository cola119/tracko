import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import UserPointer from '../components/UserPointer'

// class Map extends Component {
// 	render() {
// 		return (
// 			<ReactMapGL
// 				{...this.props.viewport}
// 				mapboxApiAccessToken={this.props.token}
// 				onViewportChange={this.props.onViewportChange}>
// 				<UserPointer />
// 			</ReactMapGL>
// 		);
// 	}
// }

const Map = (props) => {
	// console.log(props);
	return (
		<ReactMapGL
			{...props.viewport}
			mapboxApiAccessToken={props.token}
			onViewportChange={props.onViewportChange}>
			{
				props.users.map((user) => {
					return (
						<UserPointer
							key={user}
							user={user}
							name={props.userlist[user].name}
							userlocations={props.userlocations[user]} />
					);
				})
			}
		</ReactMapGL>
	);
};

export default Map
