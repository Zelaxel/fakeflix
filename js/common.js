async function loadTemplate(templateName, targetElementId) {
    try {
        const response = await fetch(`/components/${templateName}.html`);
        const html = await response.text();
        document.getElementById(targetElementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading template ${templateName}:`, error);
    }
}