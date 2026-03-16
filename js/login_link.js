const emailInput = document.getElementById("signinEmail");
const link = document.querySelector(".form-link");

if (emailInput && link) {
    link.addEventListener("click", () => {
        const email = emailInput.value.trim();
        if (email) {
            // Cambia la URL del enlace según la página
            if (window.location.pathname.includes("signin.html")) {
                link.href = `login.html?email=${encodeURIComponent(email)}`;
            } else if (window.location.pathname.includes("login.html")) {
                link.href = `signin.html?email=${encodeURIComponent(email)}`;
            }
        }
    });
}