

const formInput = document.querySelector('.form-wrapper');
const signUpBtn = document.getElementById('sign-up');
const closeBtn = document.querySelector('.close-btn');
const registerBtn = document.querySelector('.register-btn');


signUpBtn.addEventListener("click", openInputField);


function openInputField() {
	console.log("FUCK")
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

