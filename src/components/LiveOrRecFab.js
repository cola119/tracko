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

const LiveOrRecFab = (props) => {
	const { classes, liveFlag, onLiveOrRecChange } = props;
	const fab = {
		color: liveFlag ? 'primary' : 'secondary',
		className: classes.fab,
		string: liveFlag ? 'LIVE' : 'REC',
	};
	return (
		<div>
			<Fab color={fab.color} className={fab.className} onClick={(e) => onLiveOrRecChange(e, liveFlag)}>
				{fab.string}
			</Fab>
		</div>
	);
}

LiveOrRecFab.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LiveOrRecFab);
