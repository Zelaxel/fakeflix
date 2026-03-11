document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplate("header", "header");

    const data = await fetchPopularTitles();
    if (!data) return;

    const recommended = data.main;
    const html = document.getElementById("recommended").innerHTML
                            .replace(/{{title}}/g, recommended.title)
                            .replace(/{{description}}/g, recommended.info)
                            .replace(/{{image}}/g, recommended.image);
    console.log(html);
    document.getElementById("recommended").innerHTML = html;

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