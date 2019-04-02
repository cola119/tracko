import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import PlayButtonIcon from '@material-ui/icons/PlayCircleFilled';
import PauseButtonIcon from '@material-ui/icons/PauseCircleFilled';
import Button from '@material-ui/core/Button';

const styles = {
	root: {
		display: 'flex',
		width: '100%',
		position: 'fixed',
		bottom: '0px',
		padding: '20px 30px'
	},
	slider: {
		// left: '30px',
		padding: '22px 0px',
	},
	button: {
		// margin: theme.spacing.unit,
	}
};

const BottomSlider = (props) => {
	const { classes, sliderValue, onBottomSliderChange, playRecFlag, playRecStart } = props;

	// warning
	// sliderValueが100になったらsetIntervalを停止したい
	if(sliderValue === 100 && playRecFlag) playRecStart(null, sliderValue, playRecFlag);
	return (
		<div className={classes.root}>
			<Button color="primary" className={classes.button} onClick={(e)=>playRecStart(e,sliderValue, !playRecFlag)}>
				{ (playRecFlag) ? <PauseButtonIcon /> : <PlayButtonIcon />}
			</Button>
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
