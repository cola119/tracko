import React from 'react';
import { SVGOverlay, BaseControl } from 'react-map-gl';

const userPointerCircleStyle = {
	fill: "blue",
	fillOpacity: 0.5,
	stroke: "blue",
	strokeWidth: 2,
}

const getUserPointerPath = (project, userlocation, pointNum) => {
	const data = userlocation.length <= pointNum ? userlocation : userlocation.slice(userlocation.length-pointNum, userlocation.length);
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
		const { user, name, userlocation } = this.props;
		// console.log(userlocation);
		const [cx, cy] = project([userlocation[userlocation.length-1].long, userlocation[userlocation.length-1].lat]);
		return (
			<g>
				<path d={getUserPointerPath(project, userlocation, 20)} stroke="lightgreen" strokeWidth="5" fill="none"/>
				<circle cx={cx} cy={cy} r={viewport.zoom/2}  style={userPointerCircleStyle} />
			</g>
		)
	}

	_render() {
		return <SVGOverlay redraw={this.redraw} />
	}
}
export default UserPointer;
