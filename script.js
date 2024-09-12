// Toggle theme (dark mode / light mode)
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in both fields.');
    }
});