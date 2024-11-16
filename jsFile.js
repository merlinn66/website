// script.js

// Function to display project details dynamically
function showDetails(title, description) {
    alert(`${title}\n\n${description}`);
}

// Add functionality to handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for contacting me, ${name}!\nI will reply to ${email} soon.`);
    this.reset(); // Clear the form after submission
});
