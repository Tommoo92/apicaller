import $ from 'jquery';

export default function searchEvent(location){
	var url = "https://polisen.se/api/events?locationname="+location;

	return $.ajax({
	  url: url,
	});

}



