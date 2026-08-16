const accueil = document.getElementById("accueil");
const jeu = document.getElementById("jeu");
const startQuiz = document.getElementById("boutonStartQuiz");

const boutonStartQuiz = document.getElementById("boutonStartQuiz");

boutonStartQuiz.addEventListener("click", function () {
    accueil.classList.add("hidden");
    jeu.classList.remove("hidden");
});