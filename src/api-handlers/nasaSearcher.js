import $ from 'jquery';

export default function searchNasa(date){
	var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date="+date+"&end_date="+date+"&api_key=dnor0ayDlQy1MM9lC1D8uqm0coolG5KWNmJTLrAw";

	return $.ajax({
	  url: url,
	});

}

export function getAsteroid(id){
	var url = "https://api.nasa.gov/neo/rest/v1/neo/"+id+"?api_key=dnor0ayDlQy1MM9lC1D8uqm0coolG5KWNmJTLrAw";

	return $.ajax({
	  url: url,
	});

}

