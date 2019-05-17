import React from 'react';
import $ from 'jquery';
import {getAsteroid} from '../api-handlers/nasaSearcher.js';

var that;
export default class Asteroid extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
    		id: props.match.params.id,
    		object: null
	    };
	    that = this;
	}

	componentDidMount(){
		$.when(getAsteroid(this.props.match.params.id)).then(function successHandler(data){
			that.setState({
				object: data
			});
			console.log(data);
		},function errorHandler(){
			console.log('Ajax call failed')
		});
	}

	render() {
		if(this.state.object !== null){
			return (
				<div className="container asteroid"> 
					<h1>Asteroid</h1>
					<p>Magnitude: {this.state.object.absolute_magnitude_h}</p>
					<p>Max diameter: {parseInt(this.state.object.estimated_diameter.meters.estimated_diameter_max,10)} m</p>
					<p>Min diameter: {parseInt(this.state.object.estimated_diameter.meters.estimated_diameter_min, 10)} m</p>				
				</div>
			);
		}else{
			return (
				<div></div>
			)
		}
	}
}