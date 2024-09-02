// script.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by class name
    const button = document.querySelector('.btn');
    
    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Redirect to another page when the button is clicked
        window.location.href = "celebration.html";  // Replace with the actual URL or page you want to link to
    });
});
