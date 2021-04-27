var topnav = document.getElementById("topnav");
var sticky = topnav.offsetTop;

function TopNav() {
    if (topnav.className === "topnav") {
      topnav.className += " responsive";
    }
    else if (topnav.className === "topnav sticky") {
      topnav.className = "topnav responsive sticky";
    }
    else if (topnav.className === "topnav responsive sticky") {
      topnav.className = "topnav sticky";
    }
    else {
      topnav.className = "topnav";
    }
}

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}

window.onscroll = () => stickyNav();
