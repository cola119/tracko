import React from 'react';
import { SVGOverlay, BaseControl } from 'react-map-gl';
import omap from '../img/torioi.bmp';

class BackgroundImage extends BaseControl {
	redraw = ({project}) => {
		const { viewport } = this._context;
		// const { user, name, userlocation } = this.props;
		// console.log(userlocation);
		const [x1, y1] = project([138.698838, 35.264056]);	// 左上
		const [x2, y2] = project([138.722321, 35.244592]);	// 右下
		return <image x={x1} y={y1} width={x2-x1} height={y2-y1} xlinkHref={omap} />;
	}

	_render() {
		return <SVGOverlay redraw={this.redraw} />
	}
}
export default BackgroundImage;
