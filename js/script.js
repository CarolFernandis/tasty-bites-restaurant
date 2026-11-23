// ===============================
// Mobile Navigation
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a navigation link
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}


// ===============================
// Contact Form
// ===============================

const contactForm = document.querySelector(".contact-form");
const successMessage = document.querySelector("#form-success");

if (contactForm && successMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        // Display the success message
        successMessage.classList.add("show");

        // Clear the form
        contactForm.reset();

        // Hide the message after 5 seconds
        setTimeout(function () {
            successMessage.classList.remove("show");
        }, 5000);

    });

}

// ===============================
// Scroll to Top Button
// ===============================

const scrollToTopButton = document.querySelector("#scrollToTop");

if (scrollToTopButton) {

    // Show button when scrolling down
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }

    });

    // Scroll smoothly to the top
    scrollToTopButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
