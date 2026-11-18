
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("show");
    });
}

// Menandai halaman yang sedang dibuka
document.querySelectorAll("nav a").forEach(link => {
    if (link.pathname === window.location.pathname) {
        link.classList.add("active");
    }
});

// Formulir kontak
const form = document.querySelector("#contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Terima kasih, pesan berhasil disiapkan!");
        form.reset();
    });
}