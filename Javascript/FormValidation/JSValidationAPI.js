const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

// id.addEventListener(type, function(event){})
urlCheck.addEventListener("input", function (event) {
  if (urlCheck.validity.typeMismatch) {
    urlCheck.setCustomValidity("I am expecting an url!");
  } else {
    urlCheck.setCustomValidity("");
  }
});

function myFunction() {
  var inpObj = document.getElementById("id1");
  //   validity	->Contains boolean properties related to the validity of an input element.
  if (!inpObj.checkValidity()) {
    // validationMessage	Contains the message a browser will display when the validity is false.
    if (inpObj.validity.rangeOverflow) {
      document.getElementById("demo").innerHTML = "Value is too large";
    } else {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
  }
}

// validity has these properties
// patternMismatch	Set to true, if an element's value does not match its pattern attribute.
// rangeOverflow	Set to true, if an element's value is greater than its max attribute.
// rangeUnderflow	Set to true, if an element's value is less than its min attribute.
// tooLong	Set to true, if an element's value exceeds its maxLength attribute.
// typeMismatch	Set to true, if an element's value is invalid per its type attribute.
// valueMissing	Set to true, if an element (with a required attribute) has no value.
// valid	Set to true, if an element's value is valid.
