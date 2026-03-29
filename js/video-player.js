document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("Video");
    const btnPlay = document.getElementById("play");
    const btnRewind = document.getElementById("rewind");
    const btnForward = document.getElementById("forward");
    const btnFullscreen = document.getElementById("fullscreen");
    const tiempo = document.getElementById("tiempo");
    const puntoRojo = document.getElementById("puntoRojo");
    const progressContainer = document.getElementById("progressContainer");
    const btnClose = document.getElementById("close");
    const player = document.getElementById("player");
    const audioBtn = document.getElementById("audioBtn");
    const audioMenu = document.getElementById("audioMenu");
    const volumeControl = document.getElementById("volumeControl");
    const subsBtn = document.getElementById("subsBtn");
    const subsMenu = document.getElementById("subsMenu");
    const fakeSubtitles = document.getElementById("subtitulosFalsos");

    subsBtn.addEventListener("click", () => {

        if(fakeSubtitles.style.display === "none" || fakeSubtitles.style.display === ""){
            fakeSubtitles.style.display = "block";
        } else {
            fakeSubtitles.style.display = "none";
        }

    });

    audioBtn.addEventListener("click", () => {

        if(audioMenu.style.display === "none" || audioMenu.style.display === ""){
            audioMenu.style.display = "block";
        } else {
            audioMenu.style.display = "none";
        }

    });

    document.addEventListener("fullscreenchange", () => {
        const footer = document.querySelector(".video_player_footer");

        if(document.fullscreenElement){
            footer.style.display = "flex";
        } else {
            footer.style.display = "flex";
        }
    });

    volumeControl.addEventListener("input", () => {
        video.volume = volumeControl.value;
    });

    volumeControl.addEventListener("change", () => {
        audioMenu.style.display = "none";
    });

    function togglePlay() {
        if (video.paused) {
            video.play();
            btnPlay.textContent = "⏸";
        } else {
            video.pause();
            btnPlay.textContent = "▶";
        }
    }

    video.addEventListener("play", () => {
        video.style.opacity = "1";
    });

    btnPlay.addEventListener("click", togglePlay);

    btnRewind.addEventListener("click", () => video.currentTime -= 10);
    btnForward.addEventListener("click", () => video.currentTime += 10);

    btnClose.addEventListener("click", async () => {
        if (document.fullscreenElement) {
            await document.exitFullscreen();
        }
        window.history.back();
    });



    btnFullscreen.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            player.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    video.addEventListener("timeupdate", () => {
        const horas = String(Math.floor(video.currentTime / 3600)).padStart(2, "0");
        const minutos = String(Math.floor((video.currentTime % 3600) / 60)).padStart(2, "0");
        const segundos = String(Math.floor(video.currentTime % 60)).padStart(2, "0");
        tiempo.textContent = `${horas}:${minutos}:${segundos}`;

        const porcentaje = (video.currentTime / video.duration) * 100;
        puntoRojo.style.left = `${porcentaje}%`;
    });

    progressContainer.addEventListener("click", (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
    });

    document.addEventListener("fullscreenchange", () => {

        if (document.fullscreenElement) {
            btnFullscreen.textContent = "⤢";
        } else {
            btnFullscreen.textContent = "⤡";
        }

    });

});