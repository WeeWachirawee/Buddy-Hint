function checkPassword() {
    const passwordInput = document.getElementById('จงใส่  IG ของจารที่ผีรักที่สุด 😘 (คำใบ้ 🧮)').value;
    const correctPassword = 'leemeyy';

    if (passwordInput === correctPassword) {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Incorrect password, please try again.');
    }
}
