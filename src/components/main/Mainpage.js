import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

import backgroundImage from '../../img/background.png';


const styles = theme => ({
	appBar: {
		position: 'relative',
	},
	icon: {
		marginRight: theme.spacing.unit * 2,
	},
	heroUnit: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
	},
	heroContent: {
		maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4,
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
			width: 1100,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	cardGrid: {
		padding: `${theme.spacing.unit * 8}px 0`,
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing.unit * 6,
	},
});


const Mainpage = (props) => {
	const { classes, compList } = props;
	const cards = Object.keys(compList);
	// const cards = [1, 2];

	const handleToEventPage = (e, id) => {
		props.history.push('/events/' + id);
	}


	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<CameraIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						tracko
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.heroUnit}>
					<div className={classes.heroContent}>
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							TRACKO
						</Typography>
						<Typography variant="h6" align="center" color="textSecondary" paragraph>
							Realtime GPS tracking system for orienteering.
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={16} justify="center">
								<Grid item>
									<Button variant="contained" color="primary" onClick={(e) => handleToEventPage(e, 'demo')}>
										デモを見る
									</Button>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
				<div className={classNames(classes.layout, classes.cardGrid)}>
					<Grid container spacing={40}>
						{cards.map(card => (
							<Grid item key={card} sm={6} md={4} lg={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image={compList[card].thumbnail}
										title="Image title"
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h5" component="h2">
											{compList[card].name}
										</Typography>
										<Typography>
											{compList[card].abstract}
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary" onClick={(e) => handleToEventPage(e, card)} disabled={!compList[card].public}>
											View
										</Button>
										<Button size="small" color="primary" disabled>
											GPXダウンロード
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</main>
			<footer className={classes.footer}>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					©︎2019 tracko.o-app.net
				</Typography>
			</footer>
		</React.Fragment>
	);
}

Mainpage.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Mainpage));
