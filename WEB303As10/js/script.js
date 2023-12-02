let userName = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("password2");
let checkbox = document.getElementById("confirm");
let countryList = document.getElementById("country");
let submitBtn = document.getElementById("submit");
let welcomeMsg = document.getElementById("welcomeMessage");



countries.forEach (country=> {
    option = document.createElement('option');
    option.value = country.code;
    option.text = country.name;
    countryList.appendChild(option);
});


function validation() {
    const validusername = userName.value.trim() !== '';
    const validpassword = password.value.length >= 12;
    const validconfirmpassword = confirmPassword.value === password.value;
    const validcheckbox = checkbox.checked;
    const validselectedcountry = countryList.value !== 'none';

    return (validusername && validpassword && validconfirmpassword && validcheckbox && validselectedcountry );
}

function toggleSubmitButton() {
    submitBtn.disabled = !validation();
}

userName.addEventListener("input", toggleSubmitButton);
password.addEventListener("input", toggleSubmitButton);
confirmPassword.addEventListener("input", toggleSubmitButton);
checkbox.addEventListener("change", toggleSubmitButton);
countryList.addEventListener("change", toggleSubmitButton);

document.getElementById("registration").addEventListener("submit", function(event) {
event.preventDefault();

  if (validation()) {
    welcomeMsg.textContent = `Welcome ${userName.value}! The country code you selected is ${countryList.value}`;
    welcomeMsg.style.display = "block"; 
  }
});


