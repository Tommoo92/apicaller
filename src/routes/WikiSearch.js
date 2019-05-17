import React from 'react';
import wikiSearcher from '../api-handlers/wikiSearcher';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import logo from '../images/wiki.jpg';

var that;

export default class WikiSearch extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	        data: []
	    };
	    that = this;
	}

	wikiSearchChange = (event) => {
		$.when(wikiSearcher(event.target.value)).then(function successHandler(data){
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
					<div className="col-sm-12">
						<div className="col-sm-6 wikiInput">
							<label> Search for wikipedia articles </label>
							<input id="WikiSearchInput" className="form-control" onChange={this.wikiSearchChange}/>
						</div>
					</div>
					<div id="wikiSearchResult">
						{this.state.data[1] !== undefined ?(
							<div className="col-sm-12 col-md-11 inner">
								{that.state.data[1].map((title, index) => (
									<div className="article row">
										<h3 key={index}>
											<NavLink to={'/WikiPage/'+title} >{title}</NavLink>
										</h3> 
										<p>
											{this.state.data[2][index]}
										</p>
										<a href={this.state.data[3][index]}>Wikipedia link</a>
										<hr className="col-sm-12"/>
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