function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'leemeyy';

    if (passwordInput === correctPassword) {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Incorrect password, please try again.');
    }
}
