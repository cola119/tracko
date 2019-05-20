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
// import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
	root: {
		display: 'flex',
	},
	title: {
		marginLeft: "10px"
	}
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
		const { classes, title, mapViewFlag, onMapViewChange, pointerRate, onPointerRateChange } = this.props;

		return (
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<InboxIcon />
					<Typography className={classes.title}>
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
							// InputProps={{
							// 	endAdornment: <InputAdornment position="end">倍</InputAdornment>,
							// }}
							margin="normal"
							variant="outlined"
						/>
					</FormGroup>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	};
}

export default withStyles(styles)(SettingExpansionPanel);
