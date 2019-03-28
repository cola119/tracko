import React from 'react';
import { SVGOverlay, BaseControl } from 'react-map-gl';

class UserPointer extends BaseControl {
	redraw = ({project}) => {
		const { viewport } = this._context;
		const { user, name, userlocation } = this.props;
		// console.log(userlocation);
		const [cx, cy] = project([userlocation[userlocation.length-1].long, userlocation[userlocation.length-1].lat]);
		return <circle cx={cx} cy={cy} r={viewport.zoom} fill="blue" stroke="red" />;
	}

	_render() {
		return <SVGOverlay redraw={this.redraw} />
	}
}
export default UserPointer;
