const email = document.querySelector('#email');
const interests = document.querySelector('#interests');
const errorMessage = document.querySelector("small");
const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("form");
const thankYouMessage = document.querySelector("#thankYouMessage");

// On Submit
document.querySelector('form').addEventListener("submit", function (e) {
    e.preventDefault();

    if(validateEmail(email.value)) {
      errorMessage.style.display = "none";
      email.style.border = "none";
      submitButton.value = "Submitting...";

      // Display Thank you message
      setTimeout(() => {
        form.style.display = "none";
        thankYouMessage.style.display = "block";
      } , 2000)

    } else {
      email.style.border = "2px solid #D02035";
      errorMessage.style.display = "block";
      return;
    }

    console.log(email.value);
    console.log(interests.value);
});

// Email validation regex
validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}