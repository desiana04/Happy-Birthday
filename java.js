window.onload = function () {
    // === EVENT LISTENER TOMBOL NEXT PAGE ===
    const btnNext = document.getElementById("btn-next");
    if (btnNext) {
        btnNext.addEventListener("click", function () {
            window.location.href = "halaman2.html";
        });
    }

    // === ANIMASI TEKS TYPEWRITER ===
    const texts = ["DEMES!<3", "SAYANG!<3", "SIANKU!<3"];
    const colors = ["#204528", "#FF07A4", "#D41A1A"];
    let currentIndex = 0;
    const changingTextElement = document.getElementById("changing-text");

    function typeText(text, color, callback) {
        let charIndex = 0;
        changingTextElement.textContent = "";
        changingTextElement.style.color = color;

        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                changingTextElement.textContent += text[charIndex];
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(callback, 1000);
            }
        }, 100);
    }

    function eraseText(callback) {
        let text = changingTextElement.textContent;
        const eraseInterval = setInterval(() => {
            if (text.length > 0) {
                text = text.slice(0, -1);
                changingTextElement.textContent = text;
            } else {
                clearInterval(eraseInterval);
                callback();
            }
        }, 50);
    }

    function changeText() {
        typeText(texts[currentIndex], colors[currentIndex], () => {
            setTimeout(() => {
                eraseText(() => {
                    currentIndex = (currentIndex + 1) % texts.length;
                    changeText();
                });
            }, 1000);
        });
    }

    if (changingTextElement) {
        changeText();
    } else {
        console.error("Element dengan ID 'changing-text' tidak ditemukan.");
    }

    // === MUSIK ===
    let audio = document.getElementById("background-music");

    if (!audio) {
        // Jika tidak ada elemen audio di HTML, buat objek Audio manual
        audio = new Audio("mylove.mp3");
        audio.loop = true;
    }

    // === TOMBOL PLAY & STOP MUSIK ===
    const stopMusicButton = document.getElementById("stop-music");
    const playMusicButton = document.getElementById("play-music");

    if (playMusicButton) {
        playMusicButton.addEventListener("click", () => {
            if (audio.paused) {
                audio.play()
                    .then(() => console.log("Musik diputar."))
                    .catch((err) => console.error("Gagal memutar musik:", err));
            }
        });
    }

    if (stopMusicButton) {
        stopMusicButton.addEventListener("click", () => {
            audio.pause();
            console.log("Musik dihentikan.");
        });
    }

    // Simpan waktu lagu sebelum pindah halaman
    const photosButton = document.getElementById("photosButton");
    if (photosButton) {
        photosButton.addEventListener("click", () => {
            if (audio) {
                sessionStorage.setItem("musicTime", audio.currentTime);
                sessionStorage.setItem("isPlaying", !audio.paused);
            }
        });
    }

    // === POPUP UNTUK LETTER ===
    const openLetterButton = document.querySelector(".open-letter");
    const popup = document.getElementById("popup");
    const closeButton = document.querySelector(".close");

    if (openLetterButton && popup && closeButton) {
        openLetterButton.addEventListener("click", function () {
            popup.style.display = "flex";
        });

        closeButton.addEventListener("click", function () {
            popup.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    } else {
        console.error("Elemen popup atau tombol tidak ditemukan.");
    }

    // === POPUP UNTUK GIFT ===
    const openGiftBtn = document.querySelector(".open-gift");
    const pop = document.getElementById("pop");
    const closeBtn = document.querySelector(".close");

    if (openGiftBtn && pop && closeBtn) {
        openGiftBtn.addEventListener("click", function () {
            pop.style.display = "flex";
        });

        closeBtn.addEventListener("click", function () {
            pop.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === pop) {
                pop.style.display = "none";
            }
        });
    } else {
        console.error("Elemen popup atau tombol tidak ditemukan.");
    }
};
