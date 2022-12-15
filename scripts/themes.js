
//blues, greens, reds, purples
var colours = [["#0034B6","#2D7DF0","#42B6F4"], ["#2F830B","#50BF20","#82E33F"], ["#A71313","#E62929","#FC6767"], ["#982EC5","#8A2BE2","#9D4EE7"]];
var colourNames = ["blue", "green", "red", "purple"]
var defaultTheme = 3; //default
var currUser = "default";

function setUser(){
    let c = getUserTheme();
    setTheme(c);
	if (c != -1){
		document.getElementById("account").innerHTML = "<a id = 'loginLink' href = '#account'>Account</a>";
		document.getElementById("footer").innerHTML = "<button class = 'logOutb' onclick = 'logOut()'>Log Out</button>";
	}
	else{
		document.getElementById("footer").innerHTML = " ";
		document.getElementById("account").innerHTML = "<a id = 'loginLink' href = '#login'>Login/Sign-up</a>";	
	}
}

function getUserTheme(){
	try{
		x = localStorage.getItem("myTheme");
		for (let i = 0; i < 4; i++){
			if (x == colourNames[i])
				return i;
		}
		return -1;
	}
	catch(exception){
		console.log(exception)
	}
}

function setTheme(val){
    if (val == -1)
	changeTheme(defaultTheme);
    else {
        changeTheme(val)
        currTheme = val;
	console.log("Theme Set: " + colourNames[val])
    };
}

function changeTheme(colorIndx){
    document.body.style.backgroundColor = colours[colorIndx][0];
    document.getElementById("header").style.backgroundColor = colours[colorIndx][1];
//    document.getElementsByClassName("menulink:hover").style.backgroundColor = colours[colorIndx][2];
//    console.log("Theme Changed: " + colorIndx);
}

function sample(){
    var tSel = document.getElementById("theme").value;
    console.log(tSel);
    if (tSel == "blue")
        changeTheme(0);
    else if (tSel == "green")
        changeTheme(1);
    else if (tSel == "red")
        changeTheme(2);
    else if (tSel == "purple")
        changeTheme(3);
}

/*
// Get a reference to the element that you want to work with
var link = document.querySelector(".menuLink");

// Set up an event handler. Notice that we don't use "on" in front
// of the event name when doing it this way.
link.addEventListener("mouseover", linkColor);

function linkColor(){
    if (link.style.backgroundColor == colours[0][2])
        link.style.backgroundColor = colours[0][1];
    else 
        link.style.backgroundColor = colours[0][1];
}
*/
