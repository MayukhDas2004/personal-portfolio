
"use strict";

/* ==========================================
   1. SHOW / HIDE ABOUT INFORMATION
========================================== */

const toggleAbout = document.getElementById("toggleAbout");
const aboutContent = document.getElementById("aboutContent");

if (toggleAbout && aboutContent) {
    toggleAbout.addEventListener("click", function () {
        const isHidden = aboutContent.hidden;

        aboutContent.hidden = !isHidden;

        toggleAbout.textContent = isHidden
            ? "Hide About Information"
            : "Show About Information";

        toggleAbout.setAttribute(
            "aria-expanded",
            String(isHidden)
        );
    });
}


/* ==========================================
   2. INTERACTIVE IMAGE GALLERY
========================================== */

// Add your own image paths when you have more images.
const galleryImages = [
    {
        src: "images/Profile.png",
        alt: "Mayukh's profile picture",
        title: "My Profile",
        description: "Computer Science Engineering Student"
    },
    {
        src: "images/project-1.png",
        alt: "My first project",
        title: "My First Project",
        description: "A project from my learning journey"
    },
    {
        src: "images/project-2.png",
        alt: "My second project",
        title: "My Projects",
        description: "Exploring web development and programming"
    }
];

const galleryImage = document.getElementById("galleryImage");
const galleryTitle = document.getElementById("galleryTitle");
const galleryDescription =
    document.getElementById("galleryDescription");
const galleryCounter = document.getElementById("galleryCounter");

const previousImage =
    document.getElementById("previousImage");
const nextImage = document.getElementById("nextImage");

let currentImageIndex = 0;

function showGalleryImage(index) {
    if (
        !galleryImage ||
        !galleryTitle ||
        !galleryDescription ||
        !galleryCounter
    ) {
        return;
    }

    currentImageIndex =
        (index + galleryImages.length) % galleryImages.length;

    const image = galleryImages[currentImageIndex];

    galleryImage.src = image.src;
    galleryImage.alt = image.alt;
    galleryTitle.textContent = image.title;
    galleryDescription.textContent = image.description;

    galleryCounter.textContent =
        `${currentImageIndex + 1} / ${galleryImages.length}`;
}

if (previousImage && nextImage) {
    previousImage.addEventListener("click", function () {
        showGalleryImage(currentImageIndex - 1);
    });

    nextImage.addEventListener("click", function () {
        showGalleryImage(currentImageIndex + 1);
    });
}

// If a gallery image is missing, show a clear fallback.
if (galleryImage) {
    galleryImage.addEventListener("error", function () {
        galleryImage.alt = "Gallery image is unavailable";

        galleryDescription.textContent =
            "Add this image to your images folder: " +
            galleryImages[currentImageIndex].src;
    });
}

showGalleryImage(0);



/* ==========================================
   3. CONTACT FORM VALIDATION
========================================== */

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formStatus = document.getElementById("formStatus");

function validateName() {
    const value = nameInput.value.trim();

    if (!value) {
        return "Please enter your name.";
    }

    if (value.length < 2) {
        return "Your name must contain at least 2 characters.";
    }

    return "";
}

function validateEmail() {
    const value = emailInput.value.trim();

    if (!value) {
        return "Please enter your email address.";
    }

    if (!emailInput.validity.valid) {
        return "Please enter a valid email address.";
    }

    return "";
}

function validateMessage() {
    const value = messageInput.value.trim();

    if (!value) {
        return "Please enter your message.";
    }

    if (value.length < 10) {
        return "Your message must contain at least 10 characters.";
    }

    return "";
}

function showFieldError(input, errorElement, message) {
    errorElement.textContent = message;

    input.setAttribute(
        "aria-invalid",
        String(Boolean(message))
    );
}

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameMessage = validateName();
        const emailMessage = validateEmail();
        const messageText = validateMessage();

        showFieldError(nameInput, nameError, nameMessage);
        showFieldError(emailInput, emailError, emailMessage);
        showFieldError(
            messageInput,
            messageError,
            messageText
        );

        if (formStatus) {
            formStatus.textContent = "";
        }

        if (nameMessage || emailMessage || messageText) {
            if (nameMessage) {
                nameInput.focus();
            } else if (emailMessage) {
                emailInput.focus();
            } else {
                messageInput.focus();
            }

            return;
        }

        if (formStatus) {
            formStatus.textContent =
                "Validation successful! This demo does not send emails. " +
                "Connect a backend or form service to deliver messages.";
        }

        contactForm.reset();

        [nameInput, emailInput, messageInput].forEach(
            function (input) {
                input.setAttribute("aria-invalid", "false");
            }
        );
    });

    // Clear old error messages as the user corrects the fields.
    nameInput.addEventListener("input", function () {
        showFieldError(nameInput, nameError, validateName());
    });

    emailInput.addEventListener("input", function () {
        showFieldError(emailInput, emailError, validateEmail());
    });

    messageInput.addEventListener("input", function () {
        showFieldError(
            messageInput,
            messageError,
            validateMessage()
        );
    });
}


/* ==========================================
   4. DARK / LIGHT MODE
========================================== */

const themeToggle = document.getElementById("themeToggle");

function updateThemeButton() {
    if (!themeToggle) {
        return;
    }

    const lightModeEnabled =
        document.documentElement.classList.contains("light-mode");

    themeToggle.textContent = lightModeEnabled
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";

    themeToggle.setAttribute(
        "aria-label",
        lightModeEnabled
            ? "Switch to dark mode"
            : "Switch to light mode"
    );

    themeToggle.setAttribute(
        "aria-pressed",
        String(lightModeEnabled)
    );
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const lightModeEnabled =
            document.documentElement.classList.toggle("light-mode");

        try {
            localStorage.setItem(
                "portfolioTheme",
                lightModeEnabled ? "light" : "dark"
            );
        } catch (error) {
            console.warn(
                "Theme preference could not be saved."
            );
        }

        updateThemeButton();
    });
}

updateThemeButton();


/* ==========================================
   5. INITIALIZATION
========================================== */

console.log("Portfolio JavaScript loaded successfully!");
