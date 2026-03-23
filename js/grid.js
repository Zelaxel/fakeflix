document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplate("header", "header");

    initialize_search_bar();

    const data = await fetchTitles();
    if (!data) return;

    const titles = [...data.titles];
    const container = document.getElementById("title-grid");
    const template = await getTemplate("title-list-item");
    const params = new URLSearchParams(window.location.search);
    const search_bar = document.getElementById("search-bar");
    const title_grid_query = document.getElementById("title-grid-query");

    title_grid_query.textContent = params.get("query");
    search_bar.value = params.get("query");
    search_bar.focus();
    const regex = new RegExp(normalize_text(params.get("query")))

    titles.forEach(title => {
        if (regex.test(normalize_text(title.title))) {
            const item = template
                .replace(/{{title}}/g, title.title)
                .replace(/{{image}}/g, title.image)
                .replace(/{{id}}/g, title.id);
            container.insertAdjacentHTML("beforeend", item);
        }
    });
});

function normalize_text(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}