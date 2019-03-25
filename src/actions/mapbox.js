import * as actionTypes from '../utils/actionTypes';

export const onViewportChange = (viewport) => ({
	type: actionTypes.ON_VIEWPORT_CHANGE,
	viewport: viewport
});
