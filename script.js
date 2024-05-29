function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'yourpassword'; // เปลี่ยนเป็นรหัสผ่านที่ต้องการ

    if (passwordInput === correctPassword) {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Incorrect password, please try again.');
    }
}
