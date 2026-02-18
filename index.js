document.addEventListener("DOMContentLoaded", () => {
    fetch('components/header/header.html')
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar el header");
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error("Error cargando el componente:", error));
});
