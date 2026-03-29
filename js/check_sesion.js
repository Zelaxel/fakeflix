window.addEventListener("pageshow", async () => {
    const session = localStorage.getItem("isLoggedIn");
    if(session !== "true") window.location.href = "./homepage-guest.html";
})