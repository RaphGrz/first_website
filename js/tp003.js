activeLocation();
let lat, lon, codeP;
function activeLocation () {
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showLocation);
	} else {
		alert("Pas de géolocalisation");
	}
}
function showLocation (getCurrentPosition) {
	lat = getCurrentPosition.coords.latitude;
	lon = getCurrentPosition.coords.longitude;
	ajaxOpenSM();
}
function ajaxOpenSM (){
	maRequete = new XMLHttpRequest();
	maRequete.open('GET','https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon, true);
	maRequete.onreadystatechange = callB;
	maRequete.send();
}
function callB (){
	if (maRequete.readyState === XMLHttpRequest.DONE) {
		if (maRequete.status === 200) {
			getCP(maRequete.responseText);
		} else {
			alert(maRequete.status);
		}
	}
}
function getCP(response) {
	var obj = JSON.parse(response);
	var x = obj.address.postcode/1000;
	codeP = x.toFixed(0);
	colorDPT();
}
function colorDPT(dpt){
	document.querySelector('path[data-num="'+codeP+'"]').style.fill="red";
}
