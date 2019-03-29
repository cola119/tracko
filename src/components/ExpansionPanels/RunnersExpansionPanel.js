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

const styles = theme => ({
	root: {
		display: 'flex',
	},
	// formControl: {
	// 	margin: theme.spacing.unit * 3,
	// },
	// group: {
	// 	margin: `${theme.spacing.unit}px 0`,
	// },
});

const RunnersExpansionPanel = (props) => {
	const { classes, title, runnerlist, runners } = props;

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className={classes.heading}>
					{title}
				</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<FormControl component="fieldset" className={classes.formControl}>
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
				</FormControl>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
}

export default withStyles(styles)(RunnersExpansionPanel);
