function signupCheck(){
    var userOK = false;
    console.log("CHECKING...");

    var u = document.getElementById("Nuname").value;

    //check if username is unique, else alert user
    //console.log("user: " + u + " theme: " + tv);
    checkUserExists(u);
}


function checkUserExists(user){
   
    try{
        asyncReq = new XMLHttpRequest();
	console.log("Request Created");
        asyncReq.addEventListener("readystatechange", checkChange, false);
	console.log("Event Listener Created");
        asyncReq.open("POST", "./cgi-bin/checkUser.cgi", true);
	console.log("Opened");
        
	asyncReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	asyncReq.send("_user=" + user);
	console.log("Request Sent");
    }
    catch(exception){
        alert("Error searching database")
        console.log(exception);
    }

}

function checkChange(){
	console.log("Check Change...");
	if (this.readyState == 4 && this.status == 200){
		var response = this.responseText;
		console.log("CheckUser Response: " + response);
		if (response != "Exists\n"){
			console.log(response + " != Exists");	
			var u = document.getElementById("Nuname").value;
			var pw = document.getElementById("Npword").value;
			var cpw = document.getElementById("cpword").value;
			var tv = document.getElementById("theme").value;
    			
			if (pw == cpw){
				console.log("Creating User")
				document.getElementById("cpwErr").innerHTML = "";
				createUser(u, pw, tv);
			}
			else{
				document.getElementById("cpwErr").innerHTML = "Passwords do not match";
			}
		}
		else{
			document.getElementById("cpwErr").innerHTML = "Username already in use, please choose another";
		}			
	}
}


function createUser(user, pass, theme){
   
    try{
        asyncReq = new XMLHttpRequest();
	console.log("Request Created");
        asyncReq.addEventListener("readystatechange", stateChange, false);
	console.log("Event Listener Created");
        asyncReq.open("POST", "./cgi-bin/createUser.cgi", true);
	console.log("Opened");
        
	asyncReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	asyncReq.send("_user=" + user + "&" + "_pass=" + pass + "&" + "_theme=" + theme);
	console.log("Request Sent");

    }
    catch(exception){
        alert("Could Not Create User")
        console.log(exception);
    }

}

function stateChange(){
	if (this.readyState == 4 && this.status == 200){
		var response = this.responseText;
		console.log("RESPONSE: "+response);
			if (response == "User Creation Successful\n"){
				console.log("User Created");
				document.getElementById("app").innerHTML = response;
				sleep(50000);
				goHash("login");
			}
			else{
				document.getElementById("app").innerHTML = "Failed to Create User";
				
			}
	}
}

function loginUser(){

	var uname = document.getElementById("uname").value;
	var pword = document.getElementById("pword").value;

	try{
        	asyncReq = new XMLHttpRequest();
        	asyncReq.addEventListener("readystatechange", loginState, false);
        	asyncReq.open("POST", "./cgi-bin/loginUser.cgi", true);
        	asyncReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		asyncReq.send("_user=" + uname + "&" + "_pass=" + pword);
    	}
    	catch(exception){
        	alert("Could Not Login")
        	console.log(exception);
    	}
}

function loginState(){
	if (this.readyState == 4 && this.status == 200){
		var response = this.responseText;
		console.log("RESPONSE: "+response);
		if (response.charAt(0) == 'v'){
			var tickNum = "";
			var theme = getTheme(response.charAt(6));
			for (let i = 0; i < 13; i++)
				tickNum += response.charAt(7+i);
			console.log(tickNum);
			console.log(theme);
			localStorage.setItem("myTicket", tickNum);
			localStorage.setItem("myTheme", theme)
			goHash("#home");
			location.reload();	
		}
		else{
			document.getElementById("loginErr").innerHTML = "Incorrect Username or Password";
		}
	}
	else {
		console.log(this.readyState + ":" + this.status);
	}
}

function logOut(){
	ticket = localStorage.getItem("myTicket");
	console.log("LOGOUT: " + ticket);
	try{
        	asyncReq = new XMLHttpRequest();
        	//asyncReq.addEventListener("readystatechange", logoutState, false);
        	asyncReq.open("POST", "./cgi-bin/logoutUser.cgi", true);
        	asyncReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		asyncReq.send("_ticket=" + ticket);
    	}
    	catch(exception){
        	alert("Could Not Logout")
        	console.log(exception);
    	}

	localStorage.removeItem("myTicket");
	localStorage.removeItem("myTheme");
	localStorage.setItem("logVar", "false");
	goHash("#login")
	location.reload();
}

function deleteUser(){
	ticket = localStorage.getItem("myTicket");

	try{
        	asyncReq = new XMLHttpRequest();
        	asyncReq.addEventListener("readystatechange", logoutState, false);
        	asyncReq.open("POST", "./cgi-bin/deleteUser.cgi", true);
        	asyncReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		asyncReq.send("_ticket=" + ticket);
    	}
    	catch(exception){
        	alert("Could Not Delete Account")
        	console.log(exception);
    	}

	logOut();
	
}

function logoutState(){
	if (this.readyState == 4 && this.status == 200){
		var response = this.responseText;
		console.log("RESPONSE: "+response);
	}
}


function getTheme(v){
	if (v == 'b')
		return "blue"
	else if (v == 'g')
		return "green"
	else if (v == 'r')
		return "red"
	else
		return "purple"
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}


