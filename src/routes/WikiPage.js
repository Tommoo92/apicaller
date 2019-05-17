import React from 'react';
import $ from 'jquery';
import {getWikiContent} from '../api-handlers/wikiSearcher'; 

var that;
export default class WikiPage extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	        title : props.match.params.title,
	        content: null,
	        key: null
	    };
	    that = this;
	}

	componentDidMount(){
		$.when(getWikiContent(this.props.match.params.title)).then(function successHandler(data){
			var page = data.query.pages;
			var pageId = Object.keys(data.query.pages)[0];
			that.setState({
  				content: data,			
  				title: page[pageId].title,
  				text: page[pageId].extract
			});
			console.log(data);
		},function errorHandler(){
			console.log('Ajax call failed')
		});
	}

	render() {
		console.log(this.state.content)
		return (
			<div className="container wikiPage"> 
				<h1>{this.state.title}</h1>
				<p>{this.state.text}</p> 
			</div>
		);
	}
}