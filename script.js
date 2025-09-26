// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    if (body.hasAttribute("data-theme")) {
        body.removeAttribute("data-theme");
    } else {
        body.setAttribute("data-theme", "dark");
    }
}

// Example usage: Call toggleDarkMode when a button is clicked
document.getElementById("lightswitch").addEventListener("click", toggleDarkMode);
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic client-side validation
    if (username && password) {
        console.log('Login successful!');
        // You can perform an AJAX request to submit the form or redirect, for example:
        // window.location.href = '/home'; // Redirect to another page after successful login
    } else {
        alert('Please fill in both fields!');
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic client-side validation
    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
