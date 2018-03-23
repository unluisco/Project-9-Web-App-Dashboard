const alert = document.getElementById('alert');
const alertClose = document.getElementById('alertClose');
const searchUser = document.getElementById('searchUser');
const msgTextarea = document.getElementById('msgTextarea');
const btnForm = document.getElementById('btnForm');
const msgAlert = document.getElementById('msgAlert');

/* add close functionality to alert box
	 ========================================================================== */

alertClose.addEventListener('click', () => {
	alert.remove();
});

/* add styles and message to form
	 ========================================================================== */

function checkField(node) {
	if (node.value == '') {
		node.classList.add('invalid');

	} else {
		if (node.classList.contains('invalid')) {
		node.classList.remove('invalid');
		}
	}
}

function checkForm() {
	msgAlert.classList.remove('hide');

	if (searchUser.value && msgTextarea.value) {
		if (msgAlert.classList.contains('error')) {
			msgAlert.classList.remove('error');
		}

		msgAlert.textContent = 'message sent';
		msgAlert.classList.add('confirmation');

		searchUser.value = '';
		msgTextarea.value = '';

	} else {
		if (msgAlert.classList.contains('confirmation')) {
			msgAlert.classList.remove('confirmation');
		}

		msgAlert.textContent = 'user not found or empty message';
		msgAlert.classList.add('error');
	}
}

btnForm.addEventListener('click', (event) => {
	event.preventDefault();

	checkField(searchUser);
	checkField(msgTextarea);
	checkForm();
});
