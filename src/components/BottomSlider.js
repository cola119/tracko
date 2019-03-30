import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
	root: {
		width: '100%',
		position: 'absolute',
		bottom: '0px',
		padding: '10px 30px'
	},
	slider: {
		padding: '22px 0px',
	},
};

const BottomSlider = (props) => {
	const { classes, sliderValue, onBottomSliderChange } = props;

	return (
		<div className={classes.root}>
			<Slider
				classes={{ container: classes.slider }}
				value={sliderValue}
				aria-labelledby="label"
				onChange={(event, value) => onBottomSliderChange(event, value)}
			/>
		</div>
	);
}

BottomSlider.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomSlider);
