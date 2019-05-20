import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ClassesExpansionPanel from './ExpansionPanels/ClassesExpansionPanel';
import RunnersExpansionPanel from './ExpansionPanels/RunnersExpansionPanel';
import SettingExpansionPanel from './ExpansionPanels/SettingExpansionPanel';

const styles = theme => ({
	root: {
		width: '100%',
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
				selectedClass={props.selectedClass} />
			<RunnersExpansionPanel
				classes={classes}
				title="Runners"
				runners={props.runners}
				runnerlist={props.runnerlist}
				selectedClass={props.selectedClass}
				viewallFlags={props.viewallFlags}
				onViewallChange={props.onViewallChange}
			/>
			<SettingExpansionPanel
				title="Setting"
				mapViewFlag={props.mapViewFlag}
				onMapViewChange={props.onMapViewChange}
				pointerRate={props.pointerRate}
				onPointerRateChange={props.onPointerRateChange}
			/>
		</div>
	);
}

LeftExpansionPanel.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftExpansionPanel);
