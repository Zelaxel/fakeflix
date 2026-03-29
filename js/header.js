function initializeHeader() {
    initializeUserPanel()
    initializeSearchBar();
}

async function initializeUserPanel() {
    const profilePictureHeader = document.getElementById("profile-picture-header");
    const profilePicturePanel = document.getElementById("profile-picture-user-panel");
    const closeButon = document.getElementById("close-button-user-panel");
    const userPanel = document.getElementById("user-panel");
    const logoutButton = document.getElementById("logout-button");
    const editButton = document.getElementById("edit-button");
    const userName = document.getElementById("user-name-label");

    userPanel.style.display = "none";

    // Obtengo los datos de usuarios.
    const userData = await fetchUserData();
    if(!userData) return;

    // Cambio los valores de user panel por los del primer usuario.
    userName.innerHTML = userData.users[0].name;
    profilePicturePanel.src = `../imgs/${userData.users[0].picture}`
    profilePictureHeader.src = `../imgs/${userData.users[0].picture}`

    profilePictureHeader.addEventListener("click", () => {
        userPanel.style.display = "flex";
    })

    closeButon.addEventListener("click", () => {
        userPanel.style.display = "none";
    })

    logoutButton.addEventListener("click", () => {
        document.location.href = "./login.html";
    })

    editButton.addEventListener("click", () => {
        document.location.href = "./profile-editor.html";
    })
}

function initializeSearchBar(){
    const search_bar = document.getElementById("search-bar");
    const search_icon = document.getElementById("search-icon");
    search_bar.addEventListener("keydown", (e) => {
        let query = search_bar.value;
        if (e.key === "Enter") {
            search(query);
        }
    })
    search_icon.addEventListener("click", () => {
        let query = search_bar.value;
        search(query);
    })
}

function search(query){
    if (query !== "") {
        document.location.href="./title-grid.html" + `?query=${query}`;
    }
}