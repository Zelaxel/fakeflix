async function xLuIncludeFile() {
    let z = document.getElementsByTagName("*");

    for (let i = 0; i < z.length; i++) {
        if (z[i].getAttribute("xlu-include-file")) {
            let a = z[i].cloneNode(false);
            let file = z[i].getAttribute("xlu-include-file");

            try {
                let response = await fetch(file);
                if (response.ok) {
                    let content = await response.text();

                    if (file === "/components/title-list-item.html") {
                        content = replaceTitleListItemTemplatePlaceholders(content, z[i]);
                    }

                    a.removeAttribute("xlu-include-file");
                    a.innerHTML = content;
                    z[i].parentNode.replaceChild(a, z[i]);
                    xLuIncludeFile();
                }
            } catch (error) {
                console.error("Error fetching file:", error);
            }

            return;
        }
    }
}

function replaceTitleListItemTemplatePlaceholders(content, element) {
    let itemData = {
        title: element.getAttribute("data-title"),
        image: element.getAttribute("data-image")
    };

    return content
        .replace(/{{title}}/g, itemData.title ?? "{{title}}")
        .replace(/{{image}}/g, itemData.image ?? "/imgs/thumbnail_placeholder.jpg");
}
