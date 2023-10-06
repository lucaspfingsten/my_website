// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Back to Top" button element
    const backToTopButton = document.getElementById("back-to-top");

    // Add a click event listener to scroll to the top of the page when the button is clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll animation
        });
    });

    // Show or hide the "Back to Top" button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});
