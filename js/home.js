document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplate("header", "header");

    initializeHeader();

    const popularData = await fetchPopularTitles()
    if (!popularData) return;
    const titlesData = await fetchTitles();
    if (!titlesData) return;

    const recommended = getRecommendedTitle(popularData.recommended, [...titlesData.titles]);
    const popular = getPopularTitles([...popularData.popular], [...titlesData.titles]);

    document.getElementById("recommended").innerHTML = document.getElementById("recommended").innerHTML
        .replace(/{{title}}/g, recommended.title)
        .replace(/{{description}}/g, recommended.info)
        .replace(/{{image}}/g, recommended.image)
        .replace(/{{id}}/g, recommended.id);

    const container = document.getElementById("title-list-items");
    const template = await getTemplate("title-list-item");

    popular.forEach(title => {
        const item = template
            .replace(/{{title}}/g, title.title)
            .replace(/{{image}}/g, title.image)
            .replace(/{{id}}/g, title.id);
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
    window.addEventListener("resize", updateButtons);
});

function getRecommendedTitle(recommended, titles) {
    return titles.find(title => title.id === recommended.id);
}

function getPopularTitles(popularIds, titles) {
    return popularIds
        .map(popular => popular.id)
        .map(id => titles.find(title => title.id === id))
        .filter(title => title !== undefined);
}
