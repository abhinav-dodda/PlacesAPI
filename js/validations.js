function getMyNearByPlace() {
var apiKey="AIzaSyB1LN-YP0Ehc6T2NdR6nNZUE_Ayq2e_Dk8";
var userEnteredLocation = $('#currentLocationTextBox').val();
var googleURL="https://maps.googleapis.com/maps/api/place/textsearch/json?query=indianrestaurants+in+"+ userEnteredLocation+"&key="+apiKey;
$.get(googleURL, function(data, status){
		var td;
		for(var i=0;i<data.results.length;i++){
			
			tr = $('<tr/>');
			tr.append("<td>" + data.results[i].name + "</td>");
			tr.append("<td>" + data.results[i].formatted_address + "</td>");
			tr.append("<td>" + data.results[i].rating + "</td>");
			$('table').append(tr);
		}
    });
}
function sortTable(){
	 var table = $(this).parents('table');
  var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
  this.asc = !this.asc;
  if (!this.asc) {
    rows = rows.reverse();
  }
  table.children('tbody').empty().html(rows);
	
}
function comparer(index) {
  return function(a, b) {
    var valA = getCellValue(a, index),
      valB = getCellValue(b, index);
    return $.isNumeric(valA) && $.isNumeric(valB) ?
      valA - valB : valA.localeCompare(valB);
  };
}

function getMyWeather(){
	var appId = "f7f158b36cced1f34e7d282ba2edbf42";
	var userCurrentLocation = $('#currentWeather').val();
	var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+userCurrentLocation+ "&appid="+appId;
	$.get(weatherURL, function(data, status){
		var td;
			tr = $('<tr/>');
			tr.append("<td>" + data.weather[0].main + "</td>");
			tr.append("<td>" + data.weather[0].description + "</td>");
			tr.append("<td>" + data.sys.sunrise + "</td>");
			tr.append("<td>" + data.sys.sunset + "</td>");
			tr.append("<td>" + data.sys.country + "</td>");
			$('table').append(tr); 
		
		console.log(data);
	});
}

function getDirections(){
	var appId = "AIzaSyBI4Fi2viFJrouOr8oss-iip9aj48La5Zo";
	var source = $('#origin').val();
	var destination = $('#destination').val();
	var directionsURL = "https://maps.googleapis.com/maps/api/directions/json?origin="+source + "&destination="+ destination+ "&key="+ appId;
	$.get(directionsURL, function(data, status){
		
		console.log(data);
	});

	
}