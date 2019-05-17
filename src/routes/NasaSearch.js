import React from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import nasaSearcher from '../api-handlers/nasaSearcher.js';
import logo from '../images/nasa.jpg';

var that;
export default class NasaSearch extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	        data: [],
	        disabled: true
	    };
	    that = this;
	}
	requestData(){
		$('#spinner').removeClass('is-hidden');
		var date = document.getElementById("nasaDate").value;
		$.when(nasaSearcher(date)).then(function successHandler(data){
			that.setState({
  				objects_count_total: data.element_count,
  				objects: data.near_earth_objects[date]
			});
			$('#spinner').addClass('is-hidden');
		},function errorHandler(){
			console.log('Ajax call failed')
		});
	}

	enableButton(){
		that.setState({disabled: false});
	}

	render() {
		return (
			<div className="container nasasearch"> 
				<div className="row">
					<div className="col-sm-12">
						<img src={logo} alt="error"/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="col-sm-4 form-group nasaform">
							<h4>Asteroids near earth</h4>
  							<input className="form-control" type="date" id="nasaDate" onChange={this.enableButton}/>
  							<input className="form-control btn" type="button" value="Send" onClick={this.requestData} disabled={this.state.disabled}/>
						</div>
					</div>
				</div>
				<div className="row nasaresult">
					<div className="col-sm-12">
						<div id="spinner" className="loader is-hidden"></div>
						{this.state.objects !== undefined ?(
						<div className="col-sm-12">
							{that.state.objects.map((object, index) => (
								<div className="row">
									<div className="col-sm-12 object">
			        					<h3>
			        						{object.name}
			        					</h3>
			        					<p> Speed(km per second): {parseInt(object.close_approach_data[0].relative_velocity.kilometers_per_second,10)} </p>
			        					<p> Diameter: {parseInt(object.estimated_diameter.meters.estimated_diameter_max,10)} m</p>
			        					<NavLink to={'/Asteroid/'+object.neo_reference_id}>More details</NavLink>
		        					</div>
	        					</div>
	    					))}
    					</div>

					):(
						<div> </div>
					)}
					</div>
				</div> 
			</div>
		);
	}
}