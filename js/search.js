function initialize_search_bar(){
    const search_bar = document.getElementById("search-bar");
    const search_icon = document.getElementById("search-icon");
    search_bar.addEventListener("keydown", (e) => {
        let query = search_bar.value;
        if (e.key === "Enter") {
            search_query(query);
        }
    })
    search_icon.addEventListener("click", () => {
        let query = search_bar.value;
        search_query(query);
    })
}

function search_query(query){
    if (query !== "") {
        document.location.href="./title-grid.html" + `?query=${query}`;
    }
}