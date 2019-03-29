import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

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

// const ClassesExpansionPanel = (props) => {
class ClassesExpansionPanel extends React.Component {
	// redux
	state = {
		value: 'ME',
	};
	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	render() {
		const { classes, title } = this.props;

		return (
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>
						{/* <ListItemIcon><InboxIcon />Runners</ListItemIcon> */}
						{title}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<FormControl component="fieldset" className={classes.formControl}>
						{/* <FormLabel component="legend">Select classes</FormLabel> */}
						<RadioGroup
							aria-label="Classes"
							name="compclasses"
							className={classes.group}
							value={this.state.value}
							onChange={this.handleChange}
						>
							<FormControlLabel value="ME" control={<Radio />} label="ME" />
							<FormControlLabel value="WE" control={<Radio />} label="WE" />
							<FormControlLabel value="M21A" control={<Radio />} label="M21A" />
							<FormControlLabel value="other" control={<Radio />} label="Other" />
							<FormControlLabel
								value="disabled"
								disabled
								control={<Radio />}
								label="(Disabled option)"
							/>
						</RadioGroup>
					</FormControl>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	};
}
//
export default withStyles(styles)(ClassesExpansionPanel);
