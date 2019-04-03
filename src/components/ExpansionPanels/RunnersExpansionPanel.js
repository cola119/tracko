import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/People';

import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Button from '@material-ui/core/Button';


const styles = theme => ({
	expansionPanelDetailsContent: {
		paddingLeft: 0,
		paddingRight: 0
	},
	root: {
		width: '100%',
		maxWidth: 200,
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		marginLeft: "10px"
	},
});

const RunnersExpansionPanel = (props) => {
	const { classes, title, runnerlist, runners, viewallFlags, onViewallChange } = props;
	// console.log(viewallFlags);

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<InboxIcon />
				<Typography className={classes.title}>
					{/* <ListItemIcon><InboxIcon />Runners</ListItemIcon> */}
					{title}
				</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails className={classes.expansionPanelDetailsContent}>
				<List className={classes.root}>
					{
						runners.filter((runner) => {
							return runnerlist[runner].class === props.selectedClass
						}).map((runner) => {
							return (
								<React.Fragment key={runner}>
									<Divider />
									<ListItem>
										<FormControlLabel
											control={
												<Checkbox
													style={{color: runnerlist[runner].color}}
													icon={<RadioButtonUnchecked fontSize="large" />}
													checkedIcon={<RadioButtonChecked fontSize="large" />}
													checked={(viewallFlags[runner] === undefined) ? false : viewallFlags[runner]}
													onChange={(e) => onViewallChange(e, runner, viewallFlags[runner])}
													value="checkedA"
												/>
											}
											label={
												<ListItemText
													primary={
														<React.Fragment>
															{runnerlist[runner].name}
														</React.Fragment>
													}
													secondary={
														<React.Fragment>
															{runnerlist[runner].club}
														</React.Fragment>
													}
												/>
											}
										/>
									</ListItem>
								</React.Fragment>
							);
						})
					}
					<Divider />
				</List>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
}

export default withStyles(styles)(RunnersExpansionPanel);
