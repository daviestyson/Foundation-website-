script.js

// Basic contact form validation (optional)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for your message!");
        document.getElementById('contact-form').reset();
    }
});





