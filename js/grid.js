document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplate("header", "header");

    initialize_search();

    const data = await fetchTitles();
    if (!data) return;

    const titles = [...data.titles];
    const container = document.getElementById("title-grid");
    const template = await getTemplate("title-list-item");
    const params = new URLSearchParams(window.location.search);
    const regex = create_regex(params.get("query"));
    const search_bar = document.getElementById("search-bar");
    const title_grid_query = document.getElementById("title-grid-query");

    title_grid_query.textContent = params.get("query");
    search_bar.value = params.get("query");
    search_bar.focus();

    titles.forEach(title => {
        if (regex.test(title.title)) {
            const item = template
                .replace(/{{title}}/g, title.title)
                .replace(/{{image}}/g, title.image);
            container.insertAdjacentHTML("beforeend", item);
        }
    });
});

function create_regex(query){
    const vocal_map = {
        'a': '[aáàäâ]',
        'e': '[eéèëê]',
        'i': '[iíìïî]',
        'o': '[oóòöô]',
        'u': '[uúùüû]',
    };
    let regex = query.replace(/[aeiou]/gi, (vocal) => {
        return vocal_map[vocal.toLowerCase()] || vocal;
    })

    return new RegExp(regex, "gi");
}