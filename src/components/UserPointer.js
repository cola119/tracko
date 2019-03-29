import React from 'react';
import { SVGOverlay, BaseControl } from 'react-map-gl';

const userPointerCircleStyle = {
	fill: "blue",
	fillOpacity: 0.5,
	stroke: "blue",
	strokeWidth: 2,
}

// userlocation === undefinedの処理
const getUserPointerPath = (project, userlocation, tailLength, viewallFlag) => {
	if (userlocation === undefined) return "";
	const data = (userlocation.length <= tailLength) ? userlocation : userlocation.slice(userlocation.length-tailLength, userlocation.length);
	const path = data.reduce((prev, curr, index, array) => {
		const [x, y] = project([curr.long, curr.lat]);
		const str = (index === 0 ? 'M' : 'L') + x + ' ' + y;
		// console.log(str);
		return prev + str;
	}, '')
	return path;
}

class UserPointer extends BaseControl {
	redraw = ({project}) => {
		const { viewport } = this._context;
		const { user, name, userlocation, viewallFlag } = this.props;
		// console.log(userlocation);
		if (userlocation === undefined) return;
		const [cx, cy] = project([userlocation[userlocation.length-1].long, userlocation[userlocation.length-1].lat]);
		const tailLength = viewallFlag ? userlocation.length : 20;
		return (
			<g>
				<path d={getUserPointerPath(project, userlocation, tailLength)} stroke="lightgreen" strokeWidth="5" fill="none"/>
				<circle cx={cx} cy={cy} r={viewport.zoom/2}  style={userPointerCircleStyle} />
			</g>
		)
	}

	_render() {
		return <SVGOverlay redraw={this.redraw} />
	}
}
export default UserPointer;
