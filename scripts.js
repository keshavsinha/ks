// scripts.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const userInfo = {
        name: name,
        jobTitle: jobTitle,
        company: company,
        phone: phone,
        email: email
    };

    const userInfoString = JSON.stringify(userInfo);
    localStorage.setItem('userInfo', userInfoString);

    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: window.location.href.replace('index.html', 'display.html') + '?data=' + encodeURIComponent(userInfoString),
        width: 128,
        height: 128
    });
});
