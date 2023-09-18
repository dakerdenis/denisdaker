// script.js
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("myHeader");

  // Function to handle scroll events
  function handleScroll() {
      if (window.scrollY > 0) {
          // User has scrolled down, change background color
          header.style.backgroundColor = "#000"; // Change to your desired background color
      } else {
          // User is at the top of the page, remove background color
          header.style.backgroundColor = "transparent";
      }
  }

  // Add a scroll event listener to the window
  window.addEventListener("scroll", handleScroll);
});
//************************************************