function initMap() {
	var map;
	map = new google.maps.Map(document.getElementById("map"),{
		center: {lat: 23.8409,lng: 91.4214},
		zoom: 18
	});
	
	var marker1 = new google.maps.Marker({
		postion: {lat: 23.841468,lng: 91.421972},
		title:"Virtual Classroom"
	});
	var marker2 = new google.maps.Marker({
		postion: {lat: 23.839317,lng:91.423442 },
		title:"Nita Ece Block"
	});
	var marker3 = new google.maps.Marker({
		postion: {lat: 23.839317,lng: 91.423442},
		title:"Lake Nita(Migratory Birds):"
	});
	var marker4 = new google.maps.Marker({
		postion: {lat: 23.841836,lng: 91.427503},
		title:"Amul Parlor"
	});
	var marker5 = new google.maps.Marker({
		postion: {lat: 23.841836,lng: 91.428736},
		title:"Gargi Hostel"
	});
	var marker6 = new google.maps.Marker({
		postion: {lat: 23.844268,lng: 91.426841},
		title:"Gomati Hostel"
	});
	var marker7 = new google.maps.Marker({
		postion: {lat: 23.840823,lng: 91.423857},
		title:"Computer Sc and EIE Building"
	});
	var marker8 = new google.maps.Marker({
		postion: {lat: 23.842270,lng: 91.420048},
		title:"NITA Mechanical and Production Engineering"
	});
	var marker9 = new google.maps.Marker({
		postion: {lat: 23.840066,lng: 91.425511},
		title:"Electrical Department"
	});
	var marker10 = new google.maps.Marker({
		postion: {lat: 23.840066,lng: 91.425511},
		title:"NITA Administrative Block"
	});
	var marker11 = new google.maps.Marker({
		postion: {lat: 23.840782,lng: 91.421117},
		title:"Student Activity Building"
	});
	var marker12 = new google.maps.Marker({
		postion: {lat: 23.840066,lng: 91.425513},
		title:"Civil engineering Building"
	});
	
	
	marker1.setMap(map);
	marker2.setMap(map);
	marker3.setMap(map);
	marker4.setMap(map);
	marker5.setMap(map);
	marker6.setMap(map);
	marker7.setMap(map);
	marker8.setMap(map);
	marker9.setMap(map);
	marker10.setMap(map);
	marker11.setMap(map);
	marker12.setMap(map);
}
	