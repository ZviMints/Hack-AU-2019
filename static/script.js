function chkform() {
	let _email = document.getElementsByName("email")[0].value;
	let _password = document.getElementsByName("password")[0].value;
	if(_email == "" || _password == "") {
		alert("איימל או סיסמא שגויים");
		return false;
	}
	return true;
}

function prime() {
	let body = document.querySelector('body');
	body.style.background = 'red';
}