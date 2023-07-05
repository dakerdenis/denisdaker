//change header to fixed & change it's color
window.onscroll = ()=> {makeHeaderSticky()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var sticky_header = document.getElementById("sticky_header");
var main__wrapper = document.getElementById("main__wrapper");

function makeHeaderSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    sticky_header.classList.add("change_header_color");
    main__wrapper.classList.add("main__wrapper_padding");
    
  } else {
    header.classList.remove("sticky");
    sticky_header.classList.remove("change_header_color");
    main__wrapper.classList.remove("main__wrapper_padding");
  }
}
//************************************************