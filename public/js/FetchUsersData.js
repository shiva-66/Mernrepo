// The below function gives the users data of the Health Tracker Application.
function fetchUsersData(){
	var usersData=null;
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load

    //shiva
    //xhr.open("GET", "https://shivadb-f348.restdb.io/rest/cctusers", false);
	//xhr.setRequestHeader("x-apikey", "657c53fe63ede92cdbf17208");
	//lahari db
	//xhr.open("GET", "https://lahari-4a08.restdb.io/rest/cctusers", false);
	//xhr.setRequestHeader("x-apikey", "657c513e63ede98b02f17205");
	
	//pranay
	//xhr.open("GET", "https://pranay-36d7.restdb.io/rest/cctpranay",false);
	//xhr.setRequestHeader("x-apikey", "65800906911bbc1f8771a7eb");
	
	// sir db
	xhr.open("GET", "https://healthtracker-06c0.restdb.io/rest/cctusers",false);
    xhr.setRequestHeader("x-apikey", "657c537763ede90d96f17207");
		
	// charan db
	//xhr.open("GET", "https://saicharanp-64e5.restdb.io/rest/ht-user",false);
    //xhr.setRequestHeader("x-apikey", "658155448c009c7e2f795f06");
		
	// Indu db
	//xhr.open("GET", "https://htcct-21e5.restdb.io/rest/htuser",false);
    //xhr.setRequestHeader("x-apikey", "658a94f59d539885fcc18917");

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
  }
};


	return JSON.parse(xhr.responseText);;
	
}


function fetchUsersProfileData(){
	var usersData=null;
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load

    //shiva
    //xhr.open("GET", "https://shivadb-f348.restdb.io/rest/user-profile", false);
	//xhr.setRequestHeader("x-apikey", "657c53fe63ede92cdbf17208");
	 
	 //lahari
	 //xhr.open("GET", "https://lahari-4a08.restdb.io/rest/user-profile", false);
	//xhr.setRequestHeader("x-apikey", "657c513e63ede98b02f17205");
	
	
	//pranay
	//xhr.open("GET", "https://pranay-36d7.restdb.io/rest/cctpranay",false);
	//xhr.setRequestHeader("x-apikey", "65800906911bbc1f8771a7eb");
	
	// sir db
	xhr.open("GET", "https://healthtracker-06c0.restdb.io/rest/user-profile",false);
    xhr.setRequestHeader("x-apikey", "657c537763ede90d96f17207");
		
	// charan db
	//xhr.open("GET", "https://saicharanp-64e5.restdb.io/rest/ht-user",false);
    //xhr.setRequestHeader("x-apikey", "658155448c009c7e2f795f06");
		
	// Indu db
	//xhr.open("GET", "https://htcct-21e5.restdb.io/rest/htuser",false);
    //xhr.setRequestHeader("x-apikey", "658a94f59d539885fcc18917");

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
  }
};


	return JSON.parse(xhr.responseText);;
	
}



function fetchUsersHealthRecordsData(){
	var usersData=null;
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load

    //shiva
    //xhr.open("GET", "https://shivadb-f348.restdb.io/rest/health-records", false);
	//xhr.setRequestHeader("x-apikey", "657c53fe63ede92cdbf17208");
	
	//lahari
	 //xhr.open("GET", "https://lahari-4a08.restdb.io/rest/health-records", false);
	//xhr.setRequestHeader("x-apikey", "657c513e63ede98b02f17205");
	
	//pranay
	//xhr.open("GET", "https://pranay-36d7.restdb.io/rest/cctpranay",false);
	//xhr.setRequestHeader("x-apikey", "65800906911bbc1f8771a7eb");
	
	// sir db
	xhr.open("GET", "https://healthtracker-06c0.restdb.io/rest/health-records",false);
    xhr.setRequestHeader("x-apikey", "657c537763ede90d96f17207");
		
	// charan db
	//xhr.open("GET", "https://saicharanp-64e5.restdb.io/rest/ht-user",false);
    //xhr.setRequestHeader("x-apikey", "658155448c009c7e2f795f06");
		
	// Indu db
	//xhr.open("GET", "https://htcct-21e5.restdb.io/rest/htuser",false);
    //xhr.setRequestHeader("x-apikey", "658a94f59d539885fcc18917");

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
  }
};


	return JSON.parse(xhr.responseText);;
	
}