import React from 'react';
import searchEvent from '../api-handlers/policeSearcher';
import $ from 'jquery';
import logo from '../images/polisen.jpg';

var that;

export default class SwedishPolice extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	        data: []
	    };
	    that = this;
	}

	eventChange = (event) => {
        $('#spinner').removeClass('is-hidden');
		$.when(searchEvent(event.target.value)).then(function successHandler(data){
            $('#spinner').addClass('is-hidden');
			that.setState({
  				data: data
			});
		},function errorHandler(){
			console.log('Ajax call failed')
		});
	}

	render() {
		return (
			<div className="form-group container wikisearch">
				<div className="col-sm-12">
					<img className="img-responsive" src={logo} alt="error" />
				</div>
				<div className="col-sm-6 policeInput">
					<label> Välj plats för brott </label>
					<select className="form-control" onChange={this.eventChange}>
						<option disabled selected value> -- Välj -- </option>
						<option value="Stockholm">Stockholm</option>
						<option value="Jönköping">Jönköping</option>
						<option value="Göteborg">Göteborg</option>
						<option value="Malmö">Malmö</option>
					</select>
				</div>
				<div id="wikiSearchResult">
                    <div id="spinner" className="police-loader is-hidden">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
					{this.state.data[1] !== undefined ?(
						<div className="col-sm-12 col-md-11 inner">
							{that.state.data.map((event, index) => (
								<div key={index} className="col-sm-12 article row">
		        					<h3 className="white-color" key={index}>
		        						{event.name}
		        					</h3> 
		        					<p>
		        						{event.summary}
		        					</p>
	        						<hr className="col-sm-12"/>
	        					</div>
	    					))}
    					</div>

					):(
						<div> </div>
					)}

				</div>
			</div>
		);
	}
}