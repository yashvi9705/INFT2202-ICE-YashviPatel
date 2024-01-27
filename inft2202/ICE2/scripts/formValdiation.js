console.log("formValidation.js loaded");

let username = document.getElementById("usernameError");
let phone = document.getElementById("inputPhone5");
let email = document.getElementById("inputEmail4");
/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if (atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if (dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    //return true if the email address is valid - how to use regex
    return emailRegex.test(emailString);
}


/**
 *  Validates the form 
 * @returns if an error displays the error message accordingly and  highlights the username field and 
 *          if there is no error it submits the form.
 */
function validateForm() {
    var usernameInput = /^[a-zA-Z0-9_-]{2,20}$/;
    var phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    var validUsername = document.getElementById('usernameInput').value.match(usernameInput);
    var validPhoneNumber = document.getElementById('inputPhone5').value.match(phoneNumberRegex);

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    // Check if the username is not valid and if not, display an error message
    if (validUsername == null) {
        document.getElementById("usernameError").textContent = 'Invalid username. Please use alphanumeric characters, underscores, and ensure the length is between 2 and 20.';
        document.getElementById("usernameInput").classList.add("is-invalid");
    }

    // Check if the email is not valid and if not, display an error message
    if(!validateEmailAddressRegex(document.getElementById("inputEmail4").value)){
        document.getElementById("emailError").textContent = 'Invalid email address. Please use alphanumeric characters, underscore and @.';
        document.getElementById("inputEmail4").classList.add("is-invalid");
    }

    // Check if the password is not valid and if not, display an error message
    if(document.getElementById("inputPassword4").value.length < 7){
        document.getElementById("passwordError").textContent = 'Invalid password.  Please make the password longer than 7 characters.';
        document.getElementById("inputPassword4").classList.add("is-invalid");
    }

    // Check if the phone number is not valid and if not, display an error message
    if(validPhoneNumber == null){
        document.getElementById("phoneError").textContent = 'Invalid phone number. Please use teh format: 999-999-9999';
        document.getElementById("inputPhone5").classList.add("is-invalid");
    }

    // If there are any errors, prevent form submission
    if (validUsername == null || !validateEmailAddressRegex(document.getElementById("inputEmail4").value) || document.getElementById("inputPassword4").value.length < 7 || validPhoneNumber == null) {
        return false;
    } else {
        // If there are no errors, submit the form
        return true;
    }
}

/**
 * This will clear/ reset the form when the reset button is clicked
 */
function clearForm() {
    // Clear error messages and highlighting on form reset.
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    // Remove "is-invalid" and "is-valid" classes from input elements.
    document.getElementById("usernameInput").classList.remove("is-invalid", "is-valid");
    document.getElementById("inputEmail4").classList.remove("is-invalid", "is-valid");
    document.getElementById("inputPassword4").classList.remove("is-invalid", "is-valid");
    document.getElementById("inputPhone5").classList.remove("is-invalid", "is-valid");

}




//TODO:
// Make all fields required (HTML)
// Add a pattern attribute in the telephone element (HTML) 
// Ensure the password is redacted into dots on screen when typed in (HTML)
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D


