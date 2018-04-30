'use strict';

var formInput = document.querySelector('.form-wrapper');
var signUpBtn = document.getElementById('sign-up');
var closeBtn = document.querySelector('.close-btn');
var registerBtn = document.querySelector('.register-btn');

signUpBtn.addEventListener("click", openInputField);

function openInputField() {
	console.log("FUCK");
	formInput.style.display = 'block';
};

// closeBtn = addEventListener('click', close);

// function close() {
// 	formInput.style.display = 'none';
// }

// registerBtn= addEventListener('click', submit);

// function submit() {
// 	formInput.style.display = 'none';
// }
//# sourceMappingURL=main.js.map
