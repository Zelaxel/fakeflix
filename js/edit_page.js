document.addEventListener('DOMContentLoaded', async () => {
    const userName = document.getElementById("user-name-edit");
    const profilePicture = document.getElementById("profile-picture-edit");
    const form = document.getElementById("edit-form");

    const userData = await fetchUserData();
    const email = localStorage.getItem("email");

    const user = userData.users.find(u => u.email === email);

    // Ponemos los datos en los componentes.
    userName.value = user.name;
    profilePicture.src = `../imgs/${user.picture}`;
});
