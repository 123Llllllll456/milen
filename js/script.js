const openMessage = document.getElementById("openMessage");
const closeMessage = document.getElementById("closeMessage");
const letter = document.getElementById("letter");
const particlesContainer = document.querySelector(".particles");

openMessage.addEventListener("click", () => {

    letter.classList.add("active");

});

closeMessage.addEventListener("click", () => {
    letter.classList.remove("active");
});


letter.addEventListener("click", (event) => {
    if (event.target === letter) {
        letter.classList.remove("active");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        letter.classList.remove("active");
    }
});


function createParticles() {
    const numberOfParticles = 35;
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left =
            Math.random() * 100 + "%";
        const size =
            Math.random() * 5 + 2;
        particle.style.width =
            size + "px";
        particle.style.height =
            size + "px";
        particle.style.animationDuration =
            Math.random() * 8 + 7 + "s";
        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particlesContainer.appendChild(particle);
    }
}
createParticles();
