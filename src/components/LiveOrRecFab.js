import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
	fab: {
		position: 'absolute',
		top: "100px",
		right: "30px",
	},
});

function LiveOrRecFab(props) {
	const { classes, liveFlag, onLiveOrRecChange } = props;
	return (
		<div>
			<Fab color="primary" aria-label="Add" className={classes.fab} onClick={(e) => onLiveOrRecChange(e, liveFlag)}>
				{liveFlag ? 'LIVE' : 'REC'}
			</Fab>
		</div>
	);
}

LiveOrRecFab.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LiveOrRecFab);
