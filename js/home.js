document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplate("header", "header");

    const data = await fetchPopularTitles();
    if (!data) return;

    const popular = [...data.popular]
    
    const container = document.getElementById("title-list-items");
    const template = await getTemplate("title-list-item");

    popular.forEach(title => {
        const item = template
            .replace(/{{title}}/g, title.title)
            .replace(/{{image}}/g, title.image);
        console.log(item);
        container.insertAdjacentHTML("beforeend", item);
    })

});