function TopNav() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
    else if (x.className === "topnav sticky") {
    	x.className = "topnav responsive sticky";
    }
    else if (x.className === "topnav responsive sticky") {
    	x.className = "topnav sticky";
    }

    else {
        x.className = "topnav";
    }
}

  
window.onscroll = function() {stickyNav()};

var topnav = document.getElementById("topnav");
var sticky = topnav.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
    topnav.responsive.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
    topnav.responsive.classList.remove("sticky")
  }
}