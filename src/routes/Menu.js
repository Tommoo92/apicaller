import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../style/css/base.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Menu extends Component {
  render() {
    return (
		<div>
			<nav className={'navbar navbar-default navbar-fixed-top'}>
				<div className="col-sm-12 upper-nav">
				<h2>ApiCaller</h2>
				</div>
				<div className="container lower-nav">
					<ul className={'nav'}>
						<li><NavLink activeClassName={"is-active"} exact to="/">Home</NavLink></li>
						<li><NavLink activeClassName={"is-active"} to="/WikiSearch">Wiki Search</NavLink></li>
						<li><NavLink activeClassName={"is-active"} to="/NasaSearch">Nasa Search</NavLink></li>
						<li><NavLink activeClassName={"is-active"} to="/SwedishPolice">Crime Search</NavLink></li>
					</ul>
				</div>
			</nav>
		</div>
    );
  }
}

 