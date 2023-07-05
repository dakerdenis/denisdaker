window.onscroll = ()=> {makeHeaderSticky()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function makeHeaderSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}