import React from 'react';
import {NavLink} from 'react-router-dom'

import bannerImage from '../images/api-icon.png';
import wikilogo from '../images/wiki.jpg';
import nasalogo from '../images/nasa.jpg';
import policelogo from '../images/polisen.jpg';

export default class Home extends React.Component {

	render() {
		return (
			<div className="container home">
				<div className="row">
					<div className="col-sm-12 apiBanner">
						<img id="bannerImage" src={bannerImage} alt="error"/>
					</div>
					<div className="col-sm-12 inline-flex">
						<div className="col-sm-4">
							<NavLink to="/WikiSearch">
								<img className="api-img" src={wikilogo} alt="error" />
							</NavLink>
						</div>
						<div className="col-sm-4">
							<NavLink to="/NasaSearch">
								<img className="api-img" src={nasalogo} alt="error"/>
							</NavLink>
						</div>
						<div className="col-sm-4">
							<NavLink to="/SwedishPolice">
								<img className="api-img" src={policelogo} alt="error" />
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		);
	}
}