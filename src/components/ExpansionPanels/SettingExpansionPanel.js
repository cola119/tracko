import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Settings';

import { withStyles } from '@material-ui/core/styles';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
	root: {
		display: 'flex',
	},
	title: {
		marginLeft: "10px"
	}
	// formControl: {
	// 	margin: theme.spacing.unit * 3,
	// },
	// group: {
	// 	margin: `${theme.spacing.unit}px 0`,
	// },
});

class SettingExpansionPanel extends React.Component {
	state = {
		checkedA: true,
		checkedB: true,
	};

	handleChange = name => event => {
		this.setState({ [name]: event.target.checked });
	};
	render() {
		const inputProps = {
			step: 0.1,
			min: 0,
		};
		// console.log(this.props);
		const { classes, title, mapViewFlag, onMapViewChange, pointerRate, onPointerRateChange } = this.props;
		// console.log(this.props._classes);

		return (
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<InboxIcon />
					<Typography className={classes.title}>
						{/* <ListItemIcon><InboxIcon />Runners</ListItemIcon> */}
						{title}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<FormGroup row>
						<FormControlLabel
							control={
								<Switch
									checked={mapViewFlag}
									onChange={(e) => onMapViewChange(e, mapViewFlag)}
									value="checkedA"
								/>
							}
							label="背景地図表示"
						/>
						{/* <FormControlLabel
							control={
								<Switch
							checked={this.state.checkedB}
							onChange={this.handleChange('checkedB')}
							value="checkedB"
							color="primary"
								/>
							}
							label="Primary"
						/> */}
						<TextField
							id="outlined-number"
							label="ポインタサイズ"
							value={pointerRate}
							onChange={(e) => onPointerRateChange(e)}
							type="number"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							inputProps={inputProps}
							InputProps={{
								endAdornment: <InputAdornment position="end">倍</InputAdornment>,
							}}
							margin="normal"
							variant="outlined"
						/>
						{/* <FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" />
							<FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />
						<FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" /> */}
					</FormGroup>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	};
}

export default withStyles(styles)(SettingExpansionPanel);
