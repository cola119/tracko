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

// function化
class ClassesExpansionPanel extends React.Component {

	render() {
		// console.log(this.props);
		const { classes, title, classlist, onClassChange, selectedClass } = this.props;
		// console.log(this.props._classes);

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
						<RadioGroup
							aria-label="Classes"
							name="compclasses"
							className={classes.group}
							value={selectedClass}
							onChange={(e) => onClassChange(e)}
						>
							{
								this.props._classes.map((_class) => {
									return <FormControlLabel
										key={_class}
										value={classlist[_class].name}
										control={<Radio />}
										label={classlist[_class].name} />;
								})
							}
							{/* <FormControlLabel
								value="disabled"
								disabled
								control={<Radio />}
								label="W21A"
							/> */}
						</RadioGroup>
					</FormControl>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	};
}

export default withStyles(styles)(ClassesExpansionPanel);
