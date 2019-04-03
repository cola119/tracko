import React from 'react';
import { SVGOverlay, BaseControl } from 'react-map-gl';

const userPointerCircleStyle = {
	fillOpacity: 0.7,
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
		const { user, userinfo, userlocation, viewallFlag, sliderValue, pointerRate } = this.props;
		if (userlocation === undefined) return;

		// データを取得するたびに呼ばれ、userlocation.lengthが1増える
		// 停止する？
		const pointOfuserlocation = parseInt((userlocation.length) * sliderValue / 100);
		const offset = (pointOfuserlocation === 0) ? 0 : 1
		try { var [cx, cy] = project([userlocation[pointOfuserlocation-offset].long, userlocation[pointOfuserlocation-offset].lat]); }
		catch(e) { console.log(e); return; }
		const tailLength = viewallFlag ? userlocation.length : 20;

		return (
			<g>
				<text x={cx} y={cy-viewport.zoom} fill={userinfo.color} fontSize={viewport.zoom}>{userinfo.name}</text>
				<path d={getUserPointerPath(project, userlocation.slice(0, pointOfuserlocation), tailLength)} stroke={userinfo.color} strokeWidth="5" fill="none" strokeOpacity="0.7"/>
				<circle cx={cx} cy={cy} r={viewport.zoom/2*pointerRate}  style={{fill: userinfo.color, stroke: userinfo.color, ...userPointerCircleStyle}} />
			</g>
		)
	}

	_render() {
		return <SVGOverlay redraw={this.redraw} />
	}
}
export default UserPointer;
