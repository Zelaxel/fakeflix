window.addEventListener("pageshow", async () => {
    const session = localStorage.getItem("isLoggedIn");
    if(event.persisted || session !== "true") window.location.href = "./homepage-guest.html";
})