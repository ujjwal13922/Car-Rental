const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click",()=>{
    navBar.classList.toggle('active')
});

const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', (e) => {
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    if (!email || !message) {
        alert("Please fill in all fields.");
        e.preventDefault();
    } else {
        alert("Message sent!");
    
    }
});