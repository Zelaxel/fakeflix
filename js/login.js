const params = new URLSearchParams(window.location.search);
const email = params.get("email");
if(email) {
    document.getElementById("signinEmail").value = email;
}
