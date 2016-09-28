document.addEventListener("DOMContentLoaded", timer);

function timer(){
var date = new Date();
	var hour = date.getHours();
	if(hour < 10) hour = "0"+hour;
	var minutes = date.getMinutes();
	if(minutes < 10) minutes = "0"+minutes;
	var seconds = date.getSeconds();
	if(seconds < 10) seconds = "0"+seconds;
	var time = hour + ":" + minutes + ":" + seconds;
	
	document.getElementById("clock").innerHTML = time;
	setTimeout("timer()",1000)
}


var contactBtn = document.getElementById("btnContact"),
	aboutMeBtn = document.getElementById("btnAboutMe"),
	projectsBtn = document.getElementById("btnProject"),
	cvBtn = document.getElementById("btnCv")
	x = '',
	leo = document.getElementById("leo"),
	back = document.getElementById("back"),
	right = document.getElementById("right"),
	left = document.getElementById("left"),
	y = 1;
	

	
function zoom(){
	document.getElementById("tile4").style.animationName = "zoom";
	leo.style.display = "none";
}
function zoomOut(){
	document.getElementById("tile4").style.animationName = "zoomOut";
	x.removeChild(x.getElementsByTagName('div')[0]);
	x.style.display = "none";
	leo.style.display = "block";
}
contactBtn.addEventListener("click", function(){
	var contact = document.getElementById("contact");
	x = contact;
	zoom();
	contact.style.animationName = "opacity";
	contact.style.display = "block";
	contact.innerHTML = '<div id="back" onclick="zoomOut()"><i class="icon-cancel"></i></div>' + contact.innerHTML;
});
aboutMeBtn.addEventListener("click", function(){
	var aboutMe = document.getElementById("aboutMe");
	x = aboutMe;
	zoom();
	aboutMe.style.animationName = "opacity";
	aboutMe.style.display = "block";
	aboutMe.innerHTML = '<div id="back" onclick="zoomOut()"><i class="icon-cancel"></i></div>' + aboutMe.innerHTML;
});
projectsBtn.addEventListener("click", function(){
	var projects = document.getElementById("projects");
	x = projects;
	zoom();
	projects.style.animationName = "opacity";
	projects.style.display = "block";
	projects.innerHTML = '<div id="back" onclick="zoomOut()"><i class="icon-cancel"></i></div>' + projects.innerHTML;
});
cvBtn.addEventListener("click", function(){
	var cv = document.getElementById("cv");
	x = cv;
	zoom();
	cv.style.animationName = "opacity";
	cv.style.display = "block";
	cv.innerHTML = '<div id="back" onclick="zoomOut()"><i class="icon-cancel"></i></div>' + cv.innerHTML;
});





























