import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
});

const RunnersExpansionPanel = (props) => {
	const { classes, title, runnerlist, runners, viewallFlags, onViewallChange } = props;
	// console.log(viewallFlags);

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className={classes.heading}>
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
								<ListItem key={runner}>
									<Avatar style={{backgroundColor: runnerlist[runner].color}}></Avatar>
									<ListItemText
										primary={runnerlist[runner].name}
										secondary={
											<React.Fragment>
												{runnerlist[runner].club}
												<Button
													size="small"
													onClick={(e) => onViewallChange(e, runner, viewallFlags[runner])}>view all</Button>
											</React.Fragment>
										}
									/>

								</ListItem>
							);
						})
					}
				</List>

				{/* <FormControl component="fieldset" className={classes.formControl}>
					{
						runners.filter((runner) => {
					return runnerlist[runner].class === props.selectedClass
						}).map((runner) => {
					return (
					<FormControlLabel
					key={runner}
					control={
					<Checkbox
					// checked={true}
					// onChange={this.handleChange('gilad')}
					value={runnerlist[runner].name}
					/>
					}
					label={runnerlist[runner].name}
					/>
					);
						})
					}
				</FormControl> */}
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
}

export default withStyles(styles)(RunnersExpansionPanel);
