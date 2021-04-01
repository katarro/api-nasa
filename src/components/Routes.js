import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './Start';
import Photos from './Photos';
import PhotoofDay from './PhotoofDay';
import Form from './Form';
import User from './User';
function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Start />
				</Route>
				<Route exact path="/photos">
					<Photos />
				</Route>
				<Route exact path="/photo-of-day">
					<PhotoofDay />
				</Route>
				<Route exact path="/asteroids/:id">
					<User />
				</Route>
				<Route exact path="/form">
					<Form />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
