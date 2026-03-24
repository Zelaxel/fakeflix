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