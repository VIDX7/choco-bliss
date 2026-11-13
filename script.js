// CHOCO BLISS SCROLL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach((element) => {
    observer.observe(element);
});// CHOCO BLISS CONTACT FORM

/* CHOCO BLISS WHATSAPP FORM */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone") || "Not provided";
        const message = formData.get("message");

        const text =
            "Hello Choco Bliss!\n\n" +
            "My name is " + name + ".\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n\n" +
            "My message:\n" + message;

        const url = "https://wa.me/2347080310846?text="
            + encodeURIComponent(text);

        window.location.assign(url);
    });
}/* Chocolate Product Scroll Animation */

const chocolateCards =
    document.querySelectorAll("#products .product-card");

const chocolateObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

chocolateCards.forEach(card => {
    chocolateObserver.observe(card);
});