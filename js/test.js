var data = document.getElementById("demo");
var latitude;
var longitude;

function activeLocation() 
    {
    if (navigator.geolocation) 
         {
        navigator.geolocation.getCurrentPosition(showLocation);
        }
    else 
        { 
        data.innerHTML = "Geolocation is not supported by this browser.";
          }
    }

function showLocation(position) 
    {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    
    data.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
    ajaxOpenSM();
    }

function ajaxOpenSM()
    {
    maRequete = new XMLHttpRequest();
    //maRequete.open('GET','https://nominatim.openstreetmap.org/reverse?format=json&lat=49.24&lon=2.9', true);
    maRequete.open('GET','https://nominatim.openstreetmap.org/notgood?format=json&lat=49.24&lon=2.9', true);
    maRequete.onreadystatechange = callB;
    maRequete.send();
    if (maRequete.readyState === XMLHttpRequest.DONE) 
        {
        if (maRequete.status === 200) 
            {
               console.log(maRequete.responseText);
            }
        else
            {
               alert(maRequete.status);
            }
           }
    }