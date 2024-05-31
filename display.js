// display.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userInfoString = urlParams.get('data');
    if (userInfoString) {
        const userInfo = JSON.parse(decodeURIComponent(userInfoString));
        const userInfoDiv = document.getElementById('userInfo');

        userInfoDiv.innerHTML = `
            <p><strong>Name:</strong> ${userInfo.name}</p>
            <p><strong>Job Title:</strong> ${userInfo.jobTitle}</p>
            <p><strong>Company:</strong> ${userInfo.company}</p>
            <p><strong>Phone:</strong> ${userInfo.phone}</p>
            <p><strong>Email:</strong> <a href="mailto:${userInfo.email}">${userInfo.email}</a></p>
        `;
    } else {
        document.getElementById('userInfo').innerHTML = '<p>No user information found.</p>';
    }
});
