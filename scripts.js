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

    // Create the QR code with the encoded URL
    const encodedUserInfo = encodeURIComponent(userInfoString);
    const displayUrl = `${window.location.href.replace('index.html', 'display.html')}?data=${encodedUserInfo}`;

    new QRCode(document.getElementById("qrcode"), {
        text: displayUrl,
        width: 128,
        height: 128
    });
});
