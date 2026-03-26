document.addEventListener("DOMContentLoaded", async () => {
    await loadTemplate("header", "header");

    initializeHeader();
    
    const id = Number(new URLSearchParams(window.location.search).get("id"));
    const data = await fetchTitles();
    if (!data) return;

    const title = [...data.titles].find(title => title.id === id);
    
    const element = document.getElementById("details-container");
    element.innerHTML = element.innerHTML
                                .replace(/{{title}}/g, title.title)
                                .replace(/{{description}}/g, title.info);
    const videoPreview = document.getElementById("video-container");

    videoPreview.innerHTML = videoPreview.innerHTML
                                .replace(/{{image}}/g, title.image);

    const seasonSection = document.getElementById("seasons");
    if (title.type === "movie") {
        seasonSection.innerHTML = "";
    } else {
        const seasonTemplate = await getTemplate("season");
        const episodeTemplate = await getTemplate("season-episode");

        [...title.seasons].forEach(season => {
            const newSeason = document.createElement('div');
            newSeason.innerHTML = seasonTemplate.replace(/{{n}}/g, season.index);
            const epList = newSeason.querySelector("#episode-list");

            [...season.episodes].forEach(ep => {
                const newEp = episodeTemplate.replace(/{{name}}/g, ep.title);
                epList.insertAdjacentHTML("beforeend", newEp);
            });

            seasonSection.appendChild(newSeason.firstElementChild);
        });
    }
});