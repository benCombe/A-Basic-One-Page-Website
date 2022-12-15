function getContent(fragmentId, callback) {
	var pages = {
		home:    	"<h1>Welcome to Assignment 5!</h1> <p class = 'content' width='60%'>I'm not quite sure what to put here, I spen" 
 					+ "t so much time working on the backend of this website that I didn't put too much thought into the ac" 
 					+ "tual content (aside from the courses/cv pages)</p><p class = 'content'>But please <a href=#signup" 
 					+ ">sign up</a> and/or <a href=#login>log in</a>! That way, you can access my <a href='#projects'>Past " 
					+ "Projects</a> page!</p><br><h3>Anyway, here's a picture of my cat,  Albus!</h3><img src='images/Albus.jpg' width='60%' height='55%'>",
		about:		"<h2>About Me</h2><table><tr><td><center><img src='images/mePic.jpg' width='30%' height='60%'></center></td></tr><tr><td><center><p sty" 
					 + "le='font-size: larger;'><b>My name is Ben! I'm a 2nd year Computer Science Student at Brocku.<br>My " 
					 + "hobbies include writing music, playing video games, and photography.<br>I'm excited to announce that"       
					 + " I will be getting some real-world experience as a developer next semester when I start my co-op at <" 
					 + "a href='https://bornea.ca/'>Bornea Dynamics</a>!</b></p></center></td></tr><tr><td colspan='2'><br><center><table cellpadding = '5'><"       
					 + "center><tr><td colspan='5'><center><h3>--- Some Links ---</h3></center></td></tr><tr><td bgcolor='#B42B2B'><a styl"       
					 + "e='text-decoration: none; color: white; font-size: medium;' href='http://bencombe.com'>My Music Webs" 
					 + "ite</a></td><td bgcolor='#DC7325'><a style='text-decoration: none; color: white; font-size: medium;'"       
					 + " href='https://soundcloud.com/bencombemedia'>My SoundCloud</a></td><td bgcolor='#1A1D3B'><a style='t"       
					 + "ext-decoration: none; color: white; font-size: medium;' href='https://github.com/benCombe'>My Github"       
					 + " Profile</a></td><td bgcolor='#3567AE'><a style='text-decoration: none; color: white; font-size: med"       
					 + "ium;' href='https://www.linkedin.com/in/ben-combe-195b0522a/'>My LinkedIn Page</a></td><td bgcolor='"       
					 + "#9722CD'><a style='text-decoration: none; color: white; font-size: medium;' href='https://www.twitch" 
					 + ".tv/mraudio29'>My Twitch Channel</a></td></tr></center></table></center></td></tr></table>",   
		courses: 	"<h2>My Courses</h2><table class = 'courseTable' width = '100%'><tr><th>COSC2P03</th><th>COSC2P12</th" 
					+ "><th>COSC2P89</th><th>COSC2P95</th><th>MATH1P12</th></tr><tr><td class = 'subh'>Advanced Data Struct" 
					+ "ures</td><td class = 'subh'>Computer Architecture</td><td class = 'subh'>Internet Technologies</td><"       
					+ "td class = 'subh'>Coding in C++ with Applications</td><td class = 'subh'>Linear Algebra</td></tr><tr"       
					+ "><td>Yifeng Li</td><td>Dave Bockus</td><td>Ali Emami</td><td>Earl Foxwell</td><td>Basil Nanayakkara<"       
					+ "/td></tr><tr><td>Implementation and use of advanced data structures including trees, graphs, hash ta" 
					+ "bles and advanced list structures, sorting and searching, recursion and traversals. Analysis of algo"       
					+ "rithms.</td><td>Evolution of digital computer. Computer organization including functional units, ins"       
					+ "truction cycle, control, buses and memory. Instruction types and memory access, instruction sequenci"       
					+ "ng and call/return. Basic assembly language programming.</td><td>Concepts and techniques required fo"       
					+ "r building and maintaining advanced interactive Web sites. Topics include XML and SGML, database con" 
					+ "nectivity and forms handling, basic animation, graphics optimization for the Web, scripting, advance"       
					+ "d searching, Web design for accessibility.</td><td>C++ as a second language. Basic language structur"       
					+ "e, data structures, libraries for application. Introduction to object-orientation and UNIX commands."       
					+ "</td><td>Systems of linear equations with applications. Matrix algebra. Determinants. Vector geometr"       
					+ "y in R2 and R3 dot product, norm and projections, cross product, lines and planes. Complex numbers. " 
					+ "Euclidean n-space. Linear transformations from Rn to Rm. Focus on applications of linear algebra to "       
					+ "sciences and integrated use of a computer algebra system.</td></tr></table>",
		cv:			"<embed src='Resume2022-23_BenCombe.pdf' type='application/pdf' width='100%' height='600px' />",
		login: 		"<center><h2>Login</h2><br><table><tr><td>Username:</td><td><input type='text' id='uname' name='uname'><b" 
					+ "r></td></tr><tr><td>Password:</td><td><input type='password' id='pword' name='pword'></td></tr><tr><br><td colspan='2'><h5 id = 'loginErr'></h5><td></tr><tr><"       
					+ "td colspan='2'><input type='submit' name='submit' value='Login' onclick='loginUser()'></td></tr><tr><td colspan='2'><center><a href=#signup>New? Sign up!</a></center>" 
					+ "</td></tr></table></center>",
		signup:		"<h2>Sign Up!</h2><table><tr><td>Username:</td><td><input type='text' name='Nuname' id='Nuname'></td></tr><tr><td>Pass" 
					+ "word:</td><td><input type='password' name='Npword' id='Npword'></td></tr><tr><td>Confirm Password:</" 
					+ "td><td><input type='password' name='cpword' id='cpword'></td></tr><tr><td id='cpwErr' colspan='2'></" 
					+ "td></tr><tr><td>Select a Theme<br><select id='theme' name='theme' onchange='sample()'><option value=" 
					+ "'purple'>Purple</option><option value='blue'>Blue</option><option value='green'>Green</option><optio" 
					+ "n value='red'>Red</option></select></td><td></td></tr><tr><td><input type='submit' value='Create Acc" 
					+ "ount' onclick='signupCheck()'></td></tr></tbody></table>",
		account:	"<h2>Account Settings</h2> <table><tr><tr><td><button class = 'logOutb' onclick = 'logOut()'>Log Out</button></td></tr><tr><td><button class = 'logOutb' onclick " 
					 + "= 'deleteUser()'>Delete Account</button></td></tr></table>",

		projects:	"<h2>Past Projects</h2><table id = 'proj' cellspacing = '0'><tr><td class = 'assCol'><a class = 'assL" 
					 + "ink' href = 'https://www.cosc.brocku.ca/~bc14lk/A1/index.html'>A1</a></td><td>In this assignment, we"
					 + " were tasked with creating a simple website using only HTML and no responsive design.</td></tr><tr"
					 + "><td class = 'assCol'><a class = 'assLink' href = 'https://www.cosc.brocku.ca/~bc14lk/A2/index.html'" 
					 + ">A2</a></td><td>For this assignment, we had to make a website as close as possible, visually, to a p"
					 + "icture of another website. We also had to make usable links and a button that changes the colour fro"
					 + "m blue to red to back to blue</td></tr><tr> <td class = 'assCol'><a class = 'assLink' href = "
					 + "'https://www.cosc.brocku.ca/~bc14lk/A3/5tD1x/index.html'>A3</a></td><td>For this project, we took th"
					 + "e website we made from A2 and added responsive design. We also had to create a registration form usi" 
					 + "ng the form tag</td></tr><tr><td class = 'assCol'><a class = 'assLink' href = 'https://www.cosc.broc"
					 + "ku.ca/~bc14lk/A4/gQ2f3/login.html'>A4</a></td><td>For this assignment, we created a login page with "
					 + "backend CGI handling</td></tr></table><br><br>"
		};

	console.log(fragmentId);
	callback(pages[fragmentId]);
}

function loadContent() {
	checkIfLoggedIn();
	var x = localStorage.getItem("logVar");

	var fragmentId = location.hash.substring(1);
	console.log(fragmentId + ":" + x);
	if (fragmentId == "projects"){ 
		console.log(x);
		if (x == "false"){
			goHash("#login");
		}
	}
	getContent(fragmentId, function(content) {
		document.getElementById("app").innerHTML = content;
	});
}


if (!location.hash) {
	location.hash = "#home";
}


loadContent();

window.addEventListener("hashchange", loadContent)


function goHash(myhash){
	console.log(myhash);
	var url = document.URL;
	var newURL = new URL(url);
	newURL.hash = myhash;
	document.location.href = newURL;
	console.log(newURL);
}

function checkIfLoggedIn(){
	ticket = localStorage.getItem("myTicket");
	if (ticket == null) ticket = 0;
    try{
        asyncReq = new XMLHttpRequest();
        console.log("Request Created");
        asyncReq.addEventListener("readystatechange", logCheckResponse, false);
        console.log("Event Listener Created");
        asyncReq.open("POST", "./cgi-bin/verifyLoggedIn.cgi", true);
        console.log("Opened");

        asyncReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        asyncReq.send("_ticket=" + ticket);
        console.log("Request Sent");

    }
    catch(exception){
        alert("Error searching database")
        console.log(exception);
    }

}

function logCheckResponse(){
	if (this.readyState == 4 && this.status == 200){
                var response = this.responseText;
		console.log("checkResponse: " + response);
		if (response == "yes\n"){
			localStorage.setItem("logVar", "true");	
		}
		else{
			localStorage.setItem("logVar", "false");	
		}
	}
}
