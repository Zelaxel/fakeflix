document.addEventListener('DOMContentLoaded', async () => {
    const userName = document.getElementById("user-name-edit");
    const profilePicture = document.getElementById("profile-picture-edit");

    const userData = await fetchUserData();

    // Ponemos los datos en los componentes.
    userName.value = userData.users[0].name;
    profilePicture.src = `../imgs/${userData.users[0].picture}`;
});