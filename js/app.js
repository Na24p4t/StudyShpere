document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginStatus = document.getElementById('loginStatus');

    // Basic demo login validation
    if (email === 'student@studysphere.com' && password === 'password123') {
        loginStatus.textContent = 'Login successful! Welcome to StudySphere!';
        loginStatus.style.color = 'green';
    } else {
        loginStatus.textContent = 'Login failed. Please check your credentials.';
        loginStatus.style.color = 'red';
    }
});
