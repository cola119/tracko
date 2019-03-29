import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import MailIcon from '@material-ui/icons/Mail';
// import InboxIcon from '@material-ui/icons/MoveToInbox';

import ClassesExpansionPanel from './ExpansionPanels/ClassesExpansionPanel';
import RunnersExpansionPanel from './ExpansionPanels/RunnersExpansionPanel';

const styles = theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
});

const LeftExpansionPanel = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<ClassesExpansionPanel
				classes={classes}
				title="Classes"
				_classes={props._classes}
				classlist={props.classlist}
				onClassChange={props.onClassChange}
				selectedClass={props.selectedClass}/>
			<RunnersExpansionPanel
				classes={classes}
				title="Runners"
				runners={props.runners}
				runnerlist={props.runnerlist}
				selectedClass={props.selectedClass}
				// onClassChange={props.onClassChange}
			/>


			<ExpansionPanel disabled>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>
						Disabled
					</Typography>
				</ExpansionPanelSummary>
			</ExpansionPanel>
		</div>
	);
}

LeftExpansionPanel.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftExpansionPanel);
