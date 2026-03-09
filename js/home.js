document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplate("header", "header");
});

class Title {
    constructor(title, image) {
        this.title = title;
        this.image = image;
    }
}

let popularTitles = [
    new Title("EII: la película", "/imgs/eii.jpg"),
];

function loadPopularList() {
    loadTemplate("/pages/title-list.html", "title-list");
}

async function putPopularTitles() {
    let list = document.getElementById("title-list-items");
    let template = await fetch("/pages/title-list-item.html")
                            .then(res => {return res.text()});

    let df = new DocumentFragment();

    popularTitles.forEach(title => {
        let htmlString = template
            .replace(/{{title}}/g, title.title)
            .replace(/{{image}}/g, title.image);
        
        let li = document.createElement('li');
        li.innerHTML = htmlString;
        df.appendChild(li);
    });
    list.appendChild(df);
}