// Function to toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordToggle = document.querySelector('.toggle-password');

    // Check current type and toggle it
    const isPasswordVisible = passwordField.type === "text";

    passwordField.type = isPasswordVisible ? "password" : "text";
    passwordToggle.innerHTML = isPasswordVisible ? "👁️" : "🙈"; // Update icon based on visibility

    // Update aria attributes for accessibility
    passwordToggle.setAttribute("aria-pressed", !isPasswordVisible);
}

// Add event listener for the toggle button
document.querySelector('.toggle-password').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action if needed
    togglePassword();
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Debugging: Check the email and password values in the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulate successful login
    alert(`User logged in successfully: ${email}`); // Alert message

    // Redirect to booking page
    window.location.href = 'booking.html'; // Ensure the URL is correct
});
