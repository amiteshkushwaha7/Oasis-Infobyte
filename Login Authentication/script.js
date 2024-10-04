const authDiv = document.getElementById('auth');
const registerDiv = document.getElementById('register');
const welcomeDiv = document.getElementById('welcome');
const welcomeUser = document.getElementById('welcomeUser');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const logoutBtn = document.getElementById('logoutBtn');

 
showRegisterLink.addEventListener('click', function() {
    authDiv.style.display = 'none';
    registerDiv.style.display = 'block';
});

 
showLoginLink.addEventListener('click', function() {
    registerDiv.style.display = 'none';
    authDiv.style.display = 'block';
});

 
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (localStorage.getItem(newUsername)) {
        alert('Username already taken! Try a different one.');
    } else {
        localStorage.setItem(newUsername, newPassword);
        alert('Registration successful! Please log in.');
        document.getElementById('registerForm').reset();
        registerDiv.style.display = 'none';
        authDiv.style.display = 'block';
    }
});

 
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(username) && localStorage.getItem(username) === password) {
        authDiv.style.display = 'none';
        welcomeDiv.style.display = 'block';
        welcomeUser.textContent = username;
    } else {
        alert('Invalid credentials! Please try again.');
    }
});


logoutBtn.addEventListener('click', function() {
    welcomeDiv.style.display = 'none';
    authDiv.style.display = 'block';
    document.getElementById('loginForm').reset();
});