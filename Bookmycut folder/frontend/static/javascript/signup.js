// Redirect to booking.html on signup form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // You can retrieve the input values if needed
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Optional: Display an alert or log the input values
    alert(`Account created for ${email}`); // Example alert, you can modify this message

    // Redirect to the booking page after signup
    window.location.href = 'booking.html'; // Change to your booking page URL
});

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});
