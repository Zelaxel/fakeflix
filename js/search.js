function initialize_search(){
    const search_bar = document.getElementById("search-bar");
    search_bar.addEventListener("keydown", (e) => {
        const query = search_bar.value;
        if (e.key === "Enter" && query !== "") {
            document.location.href="/fakeflix/pages/title-grid.html" + `?query=${query}`;
        }
    })
}