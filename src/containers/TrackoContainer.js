import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TrackoEventsContainer from './TrackoEventsContainer';


class TrackoContainer extends Component {
	render() {
		return (
			<BrowserRouter>
				{/* <ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/events'>Friends</Link></li>
				</ul> */}
				<div>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/events' component={TrackoEventsContainer} />
				</div>
			</BrowserRouter>
		);
	}
}

const Home = () => (
  <div>
	  <h2>Home</h2>
	  <p>Welcome to ようこそ</p>
  </div>
)
const About = () => (
  <div>
	  <h2>About</h2>
	  <p>フレンズに投票するページです</p>
  </div>
)

export default TrackoContainer;
