const registrationForm = document.getElementById('registrationForm');
const leaderboard = document.getElementById('leaderboard');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const startGameButton = document.getElementById('startGameButton');
let users = [];
let currentQuestionIndex = 0;
let currentUser = null;

// Sualların siyahısı (misal üçün)
const questions = [
    {
        question: "Azərbaycanda ən böyük göl hansıdır?",
        answers: ["Göygöl", "Ceyranbatan", "Səfəvilər", "Hacıqabul"],
        correct: 0
    },
    {
        question: "Azərbaycanın paytaxtı hansıdır?",
        answers: ["Gəncə", "Şəki", "Bakı", "Naxçıvan"],
        correct: 2
    }
];

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const userExists = users.some(user => user.name === username);
    if (!userExists) {
        users.push({ name: username, score: 0 });
        currentUser = username;
        updateLeaderboard();
    } else {
        alert('Bu adla artıq qeydiyyat var.');
    }
    document.getElementById('username').value = '';
});

startGameButton.addEventListener('click', startGame);

function updateLeaderboard() {
    leaderboard.innerHTML = '';
    users.sort((a, b) => b.score - a.score);
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = ${user.name}: ${user.score} xal;
        leaderboard.appendChild(li);
    });
}

function startGame() {
    if (!currentUser) {
        alert('İlk öncə qeydiyyatdan keçməlisiniz.');
        return;
    }
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const question = questions[index];
    questionElement.textContent = question.question;
    answersElement.innerHTML = '';
    question.answers.forEach((answer, i) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(i));
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        users.find(user => user.name === currentUser).score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert('Oyun bitdi!');
        currentQuestionIndex = 0;
        updateLeaderboard();
    }
}

function spinWheel() {
    const wheelContainer = document.getElementById('wheelContainer');
    const fənnlər = ['Riyaziyyat', 'Elm', 'Tarix', 'Cəmiyyət', 'İncəsənət'];
    const chosenFənn = fənnlər[Math.floor(Math.random() * fənnlər.length)];
    wheelContainer.textContent = Seçilən fənn: ${chosenFən};
}