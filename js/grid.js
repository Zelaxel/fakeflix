document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplate("header", "header");

    const data = await fetchTitles();
    if (!data) return;

    const titles = [...data.titles];
    const container = document.getElementById("title-grid");
    const template = await getTemplate("title-list-item");

    titles.forEach(title => {
        const item = template
            .replace(/{{title}}/g, title.title)
            .replace(/{{image}}/g, title.image);
        container.insertAdjacentHTML("beforeend", item);
    });
});