const params = new URLSearchParams(window.location.search);
const email = params.get("email");
if(email) {
    document.getElementById("signinEmail").value = email;
}

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signinEmail").value;
    const password = document.querySelector("input[name='password']").value;

    const res = await fetch("/data/users.json");
    const data = await res.json();

    const users = data.users;

    const user = users.find(u => u.email === email);

    if (!user) {
        alert("Usuario no encontrado");
        return;
    }

    if (user.password !== password) {
        alert("Contraseña incorrecta");
        return;
    }

    alert("Inicio de sesión exitoso");

    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("email", email)

    window.location.href = "./index.html";
});
