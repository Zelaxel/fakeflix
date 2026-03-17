document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplate("header", "header");

    initialize_search();

    const data = await fetchPopularTitles();
    if (!data) return;

    const recommended = data.main;
    
    const html = document.getElementById("recommended").innerHTML
                            .replace(/{{title}}/g, recommended.title)
                            .replace(/{{description}}/g, recommended.info)
                            .replace(/{{image}}/g, recommended.image);
    document.getElementById("recommended").innerHTML = html;

    const popular = [...data.popular];
    
    const container = document.getElementById("title-list-items");
    const template = await getTemplate("title-list-item");

    popular.forEach(title => {
        const item = template
            .replace(/{{title}}/g, title.title)
            .replace(/{{image}}/g, title.image);
        container.insertAdjacentHTML("beforeend", item);
    });

    const buttons = document.querySelectorAll(".list-button");
    const btnLeft = buttons[0];
    const btnRight = buttons[1];

    const scrollAmount = 300;
    btnLeft.addEventListener("click", () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    btnRight.addEventListener("click", () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    function updateButtons() {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        btnLeft.disabled = scrollLeft <= 1;
        btnRight.disabled = scrollLeft >= maxScroll - 1;
    }

    updateButtons()
    container.addEventListener("scroll", updateButtons);
});