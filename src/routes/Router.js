import React  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../style/css/base.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Menu from './Menu';
import Home from './Home';
import WikiSearch from './WikiSearch';
import NasaSearch from './NasaSearch';
import WikiPage from './WikiPage';
import Asteroid from './Asteroid';
import SwedishPolice from './SwedishPolice';

export default () => (
	<Router>
		<div className="height100">
			<Menu />
			<Route path="/" exact render={
				props => <Home {...props}/>
			} />
			<Route path="/WikiSearch" exact render={
				props => <WikiSearch {...props}/>
			} />
			<Route path="/NasaSearch" exact render={
				props => <NasaSearch {...props}/>
			} />
			<Route path="/SwedishPolice" exact render={
				props => <SwedishPolice {...props}/>
			} />
			<Route path="/WikiPage/:title" exact strict component={WikiPage} />
			<Route path="/Asteroid/:id" exact strict component={Asteroid} />
		</div>
	</Router>
); 