document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplate("header", "header");

    initializeHeader();

    const data = await fetchTitles();
    if (!data) return;

    const titles = [...data.titles];
    const container = document.getElementById("title-grid");
    const template = await getTemplate("title-list-item");
    const params = new URLSearchParams(window.location.search);
    const search_bar = document.getElementById("search-bar");
    const title_grid_query = document.getElementById("title-grid-query");

    title_grid_query.textContent = getShowingMessage(params);
    search_bar.value = params.get("query");
    search_bar.focus();

    titles.forEach(title => {
        if (titleMatch(title, params)) {
            const item = template
                .replace(/{{title}}/g, title.title)
                .replace(/{{image}}/g, title.image)
                .replace(/{{id}}/g, title.id);
            container.insertAdjacentHTML("beforeend", item);
        }
    });
});

function getShowingMessage(params) {
    if (params.get("query") !== null) return params.get("query");
    if (params.get("recentlyAdded") !== null) return "Recently added";
    if (params.get("type") === "movie") return "Movies";
    return "Series";
}

function titleMatch(title, params) {
    if (params.get("recentlyAdded") !== null) return title.recentlyAdded;
    if (params.get("type") !== null) return title.type === params.get("type");
    if (params.get("query") === null) return true
    let queryRex = new RegExp(normalizeText(params.get("query")));
    return queryRex.test(normalizeText(title.title)) ||
           queryRex.test(normalizeText(title.info)) ||
           [...title.tags].some(tag => queryRex.test(normalizeText(tag)))
}

function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}