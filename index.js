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

var contact__form = document.getElementById("contact__form");

contact__form.addEventListener("submit",(e)=>{
    e.preventDefault();

    var errorMessages = document.getElementById("errorMessages");
    var closeButton = document.querySelector(".close-button");
    errorMessages.innerHTML = ''; // Clear previous error messages


    // Check if the name field is filled
    var nameInput = document.querySelector(".contact__form__input__input input[placeholder='Your name']");
    var name = nameInput.value.trim();
    
    // Check if the number field is filled
    var numberInput = document.querySelector(".contact__form__input__input input[placeholder='Your mobile number']");
    var number = numberInput.value.trim();

    // Check if the email field is filled
    var emailInput = document.querySelector(".contact__form__input__input input[placeholder='Your e-mail address']");
    var email = emailInput.value.trim();

    // Check if the message textarea is filled
    var messageTextarea = document.querySelector(".contact__form__input__textarea textarea");
    var message = messageTextarea.value.trim();

    // Check if at least one radio button is checked
    var radioButtons = document.querySelectorAll(".contact__form__input__radio input[name='radio-group']");
    
    var isRadioChecked = false;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isRadioChecked = true;
            break;
        }
    }

    // Check if the consent checkbox is checked
    var consentCheckbox = document.getElementById("consentCheckbox");
    var isConsentChecked = consentCheckbox.checked;

    var formContent = false;
     // Validate all fields
     if (name === "" || number === "" || email === "" || message === "" || !isRadioChecked || !isConsentChecked) {
        // Display error messages in the errorMessages div
        if (name === "") {
            errorMessages.innerHTML += "<p>Name is required.</p>";
        }
        if (number === "") {
            errorMessages.innerHTML += "<p>Number is required.</p>";
        }
        if (email === "") {
            errorMessages.innerHTML += "<p>Email is required.</p>";
        }
        if (message === "") {
            errorMessages.innerHTML += "<p>Message is required.</p>";
        }
        if (!isRadioChecked) {
            errorMessages.innerHTML += "<p>Please select a contact method.</p>";
        }
        if (!isConsentChecked) {
            errorMessages.innerHTML += "<p>Please agree to the terms.</p>";
        }

        errorMessages.style.display = 'block'; // Show the error message box
        closeButton.style.display = 'block'; // Show the close button
        errorMessages.innerHTML+='<span class="close-button" onclick="closeErrorMessages()">X</span>';


        // Hide the error message div after 2 seconds
        setTimeout(function () {
            errorMessages.style.display = 'none';
            closeButton.style.display = 'none'; // Hide the close button
        }, 3000);

        formContent =  false;
    } else {
        formContent = true;
        
        var contact__form__container = document.getElementById("contact__form__container");
        contact__form__container.style.display="none";
        contact__form.style.backgroundImage = "url('./style/img/daker_contact_black.png')";


        var load__spinner = document.getElementById("load__spinner");
        load__spinner.style.display="block";
        load__spinner.style.zIndex="200";
                // Hide the error message div after 2 seconds
                setTimeout(function () {
                    load__spinner.style.display="none";// Hide the close button
                    var success__block = document.getElementById("success__block");
                    success__block.style.display="flex";
                }, 1500);
    }
});

function closeErrorMessages() {
    var errorMessages = document.getElementById("errorMessages");
    errorMessages.style.display = 'none'; // Hide the error message box
};