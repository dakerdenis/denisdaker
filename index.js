document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("myHeader");

    function handleScroll() {
        if (window.scrollY > 0) {
            header.style.backgroundColor = "#000";
        } else {
            header.style.backgroundColor = "transparent";
        }
    }
    window.addEventListener("scroll", handleScroll);
});
//************************************************
const headerHeight = document.querySelector('header').offsetHeight;
const headerLinks = document.querySelectorAll('header a');
headerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const scrollPosition = targetSection.offsetTop - headerHeight;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    });
});


//****************************************************** */

var contact__form = document.getElementById("contact__form");
contact__form.addEventListener("submit", (e) => {
    e.preventDefault();

    var errorMessages = document.getElementById("errorMessages");
    var closeButton = document.querySelector(".close-button");
    errorMessages.innerHTML = '';
    var nameInput = document.querySelector(".contact__form__input__input input[placeholder='Your name']");
    var name = nameInput.value.trim();

    var numberInput = document.querySelector(".contact__form__input__input input[placeholder='Your mobile number']");
    var number = numberInput.value.trim();

    var emailInput = document.querySelector(".contact__form__input__input input[placeholder='Your e-mail address']");
    var email = emailInput.value.trim();

    var messageTextarea = document.querySelector(".contact__form__input__textarea textarea");
    var message = messageTextarea.value.trim();

    var radioButtons = document.querySelectorAll(".contact__form__input__radio input[name='radio-group']");

    var isRadioChecked = false;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isRadioChecked = true;
            break;
        }
    }
    var consentCheckbox = document.getElementById("consentCheckbox");
    var isConsentChecked = consentCheckbox.checked;

    var formContent = false;
    if (name === "" || number === "" || email === "" || message === "" || !isRadioChecked || !isConsentChecked) {
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

        errorMessages.style.display = 'block';
        closeButton.style.display = 'block';
        errorMessages.innerHTML += '<span class="close-button" onclick="closeErrorMessages()">X</span>';

        setTimeout(function () {
            errorMessages.style.display = 'none';
            closeButton.style.display = 'none';
        }, 3000);

        formContent = false;
    } else {
        formContent = true;

        var contact__form__container = document.getElementById("contact__form__container");
        contact__form__container.style.display = "none";
        contact__form.style.backgroundImage = "url('./style/img/daker_contact_black.png')";


        var load__spinner = document.getElementById("load__spinner");
        load__spinner.style.display = "block";
        load__spinner.style.zIndex = "200";
        setTimeout(function () {
            load__spinner.style.display = "none";
            var success__block = document.getElementById("success__block");
            success__block.style.display = "flex";
        }, 1500);
    }
});

function closeErrorMessages() {
    var errorMessages = document.getElementById("errorMessages");
    errorMessages.style.display = 'none';
};

/**************************************** */


const numericInput = document.getElementById('numericInput');
const maxLength = 30;
numericInput.addEventListener('input', function () {
    const inputValue = numericInput.value;
    if (inputValue.length > maxLength) {
        numericInput.value = inputValue.slice(0, maxLength);
    }
});

const textArea = document.getElementById('textArea');
const textAreamaxLength = 150;
textArea.addEventListener('input', function () {
    const inputValue = textArea.value;
    if (inputValue.length > textAreamaxLength) {
      textArea.value = inputValue.slice(0, textAreamaxLength);
    }
  });