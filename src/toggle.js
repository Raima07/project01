// mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Nav Bar tabs
const navLinks = document.querySelectorAll(".nav-link");
const setActiveHomePageOnLoad = () => {
    const homeSection = document.getElementById("active");
    if (homeSection) {
        const homeLink = document.querySelector("a[href='#Home']");
        homeLink.classList.add("text-green-500");
    }
};
window.onload = () => {
    setActiveHomePageOnLoad();
};
window.onscroll = () => {
    let current = "";
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("text-green-500");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("text-green-500");
        }
    });
};

// Sign Up and Sign In tabs
const SignInButton = document.getElementById('SignInButton');
const authModal = document.getElementById('authModal');
const closeModalButton = document.getElementById('closeModalButton');
const signInTabButton = document.getElementById('signInTabButton');
const signUpTabButton = document.getElementById('signUpTabButton');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
SignInButton.addEventListener('click', () => {
    authModal.classList.toggle('hidden');
});
closeModalButton.addEventListener('click', () => {
    authModal.classList.add('hidden');
});
signInTabButton.addEventListener('click', () => {
    signInTabButton.style.backgroundColor ="#15803d";
    signUpTabButton.style.backgroundColor ="#22c55e";
    signInForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');
});
signUpTabButton.addEventListener('click', () => {
    signInTabButton.style.backgroundColor ="#22c55e";
    signUpTabButton.style.backgroundColor ="#15803d ";
    signInForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
});