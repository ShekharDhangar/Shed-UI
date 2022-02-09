// LOGIN FORM AND SIGN UP FORM SWITCHING
// login,sign up form elements
const signUpForm = document.getElementById('sign-up'),
trylogIn = document.getElementById('try-login'),
trySignUp = document.getElementById('try-signup'),
logInForm = document.getElementById('login');

trySignUp.addEventListener('click', changeForm)
trylogIn.addEventListener('click', changeForm)
 
function changeForm(){
    signUpForm.classList.toggle('none')
    logInForm.classList.toggle('none');
}


// see password value 
let passwordEye = document.querySelector('.password-control');

function show_hide_password(event){
    let showPasswordInp = document.querySelector('.see-password-input');    
	if (showPasswordInp.getAttribute('type') == 'password') {
		event.target.classList.add('view');
		showPasswordInp.setAttribute('type', 'text');
	} else {
		event.target.classList.remove('view');
		showPasswordInp.setAttribute('type', 'password');
	}
}

passwordEye.addEventListener('click',show_hide_password)

