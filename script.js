// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email validation regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Feedback area
    const feedback = document.getElementById('feedback') || document.createElement('p');

    // Add feedback area if it doesn't exist
    if (!document.getElementById('feedback')) {
        feedback.id = 'feedback';
        feedback.style.marginTop = '10px';
        document.getElementById('contact-form').appendChild(feedback);
    }

    // Validation
    if (!name || !email || !message) {
        feedback.innerText = "Please fill in all fields.";
        feedback.style.color = "red";
        if (!name) document.getElementById('name').focus();
        return;
    }

    if (!email.match(emailPattern)) {
        feedback.innerText = "Please enter a valid email address.";
        feedback.style.color = "red";
        document.getElementById('email').focus();
        return;
    }

    // Success message
    feedback.innerText = "Thank you for your message!";
    feedback.style.color = "green";

    // Reset form fields
    document.getElementById('contact-form').reset();
});
