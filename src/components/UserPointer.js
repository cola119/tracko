import React from 'react';
import {BaseControl} from 'react-map-gl';

class UserPointer extends BaseControl {
	_render() {
		// const {viewport} = this._context;
		const { user, name, userlocations } = this.props;
		// console.log(userlocations);
		return (
			<svg>
				<circle cx="100" cy="125" r="40"></circle>
			</svg>
		);
	}
}
export default UserPointer;
