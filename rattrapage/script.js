const accueil = document.getElementById("accueil");
const jeu = document.getElementById("jeu");
const startQuiz = document.getElementById("startQuiz");

startQuiz.addEventListener("click", function () {
    accueil.classList.add("hidden");
    jeu.classList.remove("hidden");
});