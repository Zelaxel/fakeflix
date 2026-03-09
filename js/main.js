document.addEventListener('DOMContentLoaded', init);



class Title {
    constructor(title, image) {
        this.title = title;
        this.image = image;
    }
}

let popularTitles = [
    new Title("EII: la película", "/imgs/eii.jpg"),
];

function init() {
    loadTemplate("/pages/header.html", "header");
    loadTemplate("/pages/homepage.html", "main", loadPopularList);
}

function loadTemplate(file, id, callback) {
    fetch(file).then(res => {return res.text()})
        .then(text => {
            document.getElementById(id).innerHTML = text;

            if(callback) {
                callback()
            }
        })
}

function loadPopularList() {
    loadTemplate("/pages/title-list.html", "title-list", putPopularTitles);
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