function initializeHeader() {
    initializeUserPanel();
    initializeSearchBar();
}

function initializeUserPanel() {
    const profilePicture = document.getElementById("profile-picture-header");
    const closeButon = document.getElementById("close-button-user-panel");
    const userPanel = document.getElementById("user-panel");
    const logout_button = document.getElementById("logout-button");
    const edit_button = document.getElementById("edit-button");

    userPanel.style.display = "none";

    profilePicture.addEventListener("click", () => {
        userPanel.style.display = "flex";
    })

    closeButon.addEventListener("click", () => {
        userPanel.style.display = "none";
    })

    logout_button.addEventListener("click", () => {
        document.location.href="./login.html";
    })

    edit_button.addEventListener("click", () => {
        document.location.href="./profile-editor.html";
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