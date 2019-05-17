import $ from 'jquery';

export default function searchWiki(searchWord){

	var url = 
	'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='
	+searchWord;

	return $.ajax({
	  url: url,
	  dataType: 'jsonp',
	  async: false,
	});

}

export function getWikiContent(title){
	var url = 
	'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles='
	+title;

	return $.ajax({
	  url: url,
	  dataType: 'jsonp',
	  async: true,
	});
}