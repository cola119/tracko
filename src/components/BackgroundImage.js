import React from 'react';
import { SVGOverlay, BaseControl } from 'react-map-gl';
import omap from '../img/aa.jpg';


class BackgroundImage extends BaseControl {
	redraw = ({ project }) => {
		const { viewport } = this._context;
		const [x1, y1] = project([this.props.comp.image.ltLong, this.props.comp.image.ltLat]);	// 左上
		const [x2, y2] = project([this.props.comp.image.rbLong, this.props.comp.image.rbLat]);	// 右下
		const [width, height] = [x2 - x1, y2 - y1];
		console.log(`${process.env.PUBLIC_URL}/img/${this.props.comp.image.name}`)
		return (
			<g>
				{/* <circle cx={x1} cy={y1} r={viewport.zoom/2} /> */}
				{/* <circle cx={x2} cy={y2} r={viewport.zoom/2} /> */}
				<image x={x1} y={y1} width={width} height={height} opacity={0.7} xlinkHref={`${process.env.PUBLIC_URL}/img/${this.props.comp.image.name}`} />
			</g>

		);
	}

	_render() {
		return <SVGOverlay redraw={this.redraw} />
	}
}
export default BackgroundImage;
