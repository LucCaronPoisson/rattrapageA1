const accueil = document.getElementById("accueil");
const jeu = document.getElementById("jeu");
const fin = document.getElementById("fin");

const startQuiz = document.getElementById("boutonStartQuiz");

const questionNumber = document.getElementById("questionNumber");
const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextQuestion = document.getElementById("nextQuestion");

let currentQuestion = 0;
let score = 0;

boutonStartQuiz.addEventListener("click", function () {
    accueil.classList.add("hidden");
    jeu.classList.remove("hidden");
});

// -------------------------
// QUESTIONS QUIZ
// -------------------------

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        answers: ["Paris", "Londres", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },

    {
        question: "Quelle est la capitale du Zimbabwe ?",
        answers: ["Masvingo", "Bulawayo", "Gweru", "Harare"],
        correctAnswer: "Harare"
    },

    {
        question: "Combien y a-t-il de pays dans l'Europe ?",
        answers: ["44", "45", "46", "47"],
        correctAnswer: "45"
    },

    {
        question: "Combien y a-t-il de pays dans l'Amérique du Sud ?",
        answers: ["12", "13", "14", "15"],
        correctAnswer: "12"
    },

    {
        question: "Quel est la bonne suite de pays pour aller de la France à la Turquie par la terre uniquement ?",
        answers: ["Allemagne, Autriche, Hongrie, Roumanie, Bulgarie",
             "Roumanie, Autriche, Bulgarie, Hongrie, Allemagne",
             "Bulgarie, Allemagne, Hongrie, Roumanie, Autriche", 
             "Hongrie, Allemagne, Roumanie, Autriche, Bulgarie"],
        correctAnswer: "Allemagne, Autriche, Hongrie, Roumanie, Bulgarie"
    },

    {
        question: "Quel est la bonne suite de pays pour aller du Mexique à la Colombie par la terre uniquement ?",
        answers: ["Nicaragua, Guatemala, panama, honduras, costa rica", 
            "Guatemala, Honduras, Nicaragua, Costa Rica, Panama", 
            "Panama, honduras, Costa Rica, Nicaragua, Guatemala", 
            "Costa Rica, Panama, Honduras, Nicaragua, Guatemala"],
        correctAnswer: "Guatemala, Honduras, Nicaragua, Costa Rica, Panama"
    },

    {
        question: "Conbien y a-t-il de régions en France ?",
        answers: ["13", "15", "17", "18"],
        correctAnswer: "18"
    },

    {
        question: "Conbien y a-t-il d'états aux États-Unis ?",
        answers: ["45", "50", "55", "56"],
        correctAnswer: "50"
    },

    {
        question: "Quelle sont les pays qu'il faut traverser par la terre uniquement pour aller le plus rapidement du Pays-Bas à l'Estonie' ?",
        answers: ["Belgique, Allemagne, Pologne, Lituanie, Lettonie", 
            "Allemagne, Pologne, Lituanie, Lettonie", 
            "Allemagne, Pologne, , Biolerussie, Lituanie, Lettonie", 
            "Belgique, Allemagne, Pologne, Biolerussie, Russie, Lettonie"],
        correctAnswer: "Allemagne, Pologne, Lituanie, Lettonie"
    },

    {
        question: "Quelle sont les pays qu'il faut traverser par la terre uniquement pour aller le plus rapidement du Ouganda à la corée du sud ?",
        answers: [
            "Soudan, égypte, Israel, Iran, Irak, Pakistan, Chine, Corée du nord, Corée du sud", 
            "Soudan du sud, soudan, égypte, israel, jordanie, iran, irak, Pakistan, inde, chine, corée du nord, corée du sud", 
            "Soudan du sud, soudan, égypte, israel, syrie, turquie, georgie, russie, Corée du nord, Corée du sud", 
            "Soudan, égypte, Israel, Syrie, Turquie, Georgie, Russie, Corée du nord, Corée du sud"
        ],
        correctAnswer: "Soudan du sud, soudan, égypte, israel, syrie, turquie, georgie, russie, Corée du nord, Corée du sud"
    }
];


// ------------------------------
// DEMARRER QUIZ
// ------------------------------

startQuiz.addEventListener("click", function () {

    accueil.classList.add("hidden");
    jeu.classList.remove("hidden");

    currentQuestion = 0;
    score = 0;

    displayQuestion();
});


// -----------------------------
// AFFICHER QUESTION
// ------------------------------

function displayQuestion() {

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    questionElement.textContent = question.question;

    answersContainer.innerHTML = "";

    nextQuestion.classList.add("hidden");


    question.answers.forEach(function (answer) {

        const button = document.createElement("button");

        button.classList.add("answerButton");

        button.textContent = answer;

        button.addEventListener("click", function () {
            checkAnswer(button, answer);
        });

        answersContainer.appendChild(button);
    });
}


// -----------------------------
// VERIFIER REPONSE
// -----------------------------

function checkAnswer(clickedButton, selectedAnswer) {

    const question = questions[currentQuestion];

    const buttons = document.querySelectorAll(".answerButton");


    // Empêche de cliquer sur plusieurs réponses
    buttons.forEach(function (button) {
        button.disabled = true;
    });


    // Vérification de la réponse
    if (selectedAnswer === question.correctAnswer) {

        clickedButton.classList.add("correct");

        score++;

    } else {

        clickedButton.classList.add("wrong");


        // Affiche la bonne réponse en vert
        buttons.forEach(function (button) {

            if (button.textContent === question.correctAnswer) {
                button.classList.add("correct");
            }

        });
    }


    // Affiche le bouton pour continuer
    nextQuestion.classList.remove("hidden");
}


// -----------------------------
// SUITE QUESTION
// -----------------------------

nextQuestion.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        displayQuestion();

    } else {

        showEndScreen();

    }
});

// -----------------------------
// ECRAN DE FIN
// -----------------------------

function showEndScreen() {

    jeu.classList.add("hidden");
    fin.classList.remove("hidden");

    console.log(`Score : ${score} / ${questions.length}`);
}