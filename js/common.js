async function loadTemplate(templateName, targetElementId) {
    try {
        const response = await fetch(`/components/${templateName}.html`);
        const html = await response.text();
        document.getElementById(targetElementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading template ${templateName}:`, error);
    }
}

async function getTemplate(templateName) {
    try {
        const response = await fetch(`/components/${templateName}.html`);
        return await response.text();
    } catch (error) {
        console.error(`Error loading template ${templateName}:`, error);
    }
}


async function fetchPopularTitles() {
    try {
        const response = await fetch("/data/popular-titles.json");
        return await response.json();
    } catch (e) {
        console.error("Error fetching data: ", e);
        return null;
    }
}