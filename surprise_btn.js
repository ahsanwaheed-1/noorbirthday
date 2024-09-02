// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the back button using its class name
    const backButton = document.querySelector('.btn-back');

    // Add a click event listener to the back button
    backButton.addEventListener('click', function() {
        // Redirect back to the main page
        window.location.href = 'index.html'; // Ensure this path is correct
    });
});
