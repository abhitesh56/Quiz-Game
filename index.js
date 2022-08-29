let question_container = document.querySelector(".question");
let container = document.querySelector(".optionContainer");
const next = document.querySelector(".next");
const scoreContainer = document.querySelector('.score')
const startBtn = document.querySelector('.startBtn');
let highScore = document.getElementById('highScore');


let currentQuestion = 0;
let score = 0;
let wrongCount = 0;

const data = [{
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Whistler was the codename of this Microsoft Operating System.",
        "correct_answer": "Windows XP",
        "incorrect_answers": [
            "Windows 2000",
            "Windows XP",
            "Windows 7",
            "Windows 95",
        ]
    },

    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What five letter word is the motto of the IBM Computer company?",
        "correct_answer": "Think",
        "incorrect_answers": [
            "Click",
            "Think",
            "Logic",
            "Pixel",

        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
        "correct_answer": "C#",
        "incorrect_answers": [
            "C#",
            "Java",
            "C++",
            "Objective-C",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
        "correct_answer": "Taiwan",
        "incorrect_answers": [
            "United States",
            "Germany",
            "Taiwan",
            "China (People&#039;s Republic of)",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What did the name of the Tor Anonymity Network orignially stand for?",
        "correct_answer": "The Onion Router",
        "incorrect_answers": [
            "The Only Router",
            "The Onion Router",
            "The Orange Router",
            "The Ominous Router",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What was the name given to Android 4.3?",
        "correct_answer": "Jelly Bean",
        "incorrect_answers": [
            "Lollipop",
            "Nutella",
            "Jelly Bean",
            "Froyo",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "On which day did the World Wide Web go online?",
        "correct_answer": "December 20, 1990",
        "incorrect_answers": [
            "December 20, 1990",
            "December 17, 1996",
            "November 12, 1990",
            "November 24, 1995",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How many cores does the Intel i7-6950X have?",
        "correct_answer": "10",
        "incorrect_answers": [
            "12",
            "10",
            "8",
            "4",
        ]
    },
    
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How fast is USB 3.1 Gen 2 theoretically?",
        "correct_answer": "10 Gb/s",
        "incorrect_answers": [
            "10 Gb/s",
            "5 Gb/s",
            "8 Gb/s",
            "1 Gb/s",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What does &quot;LCD&quot; stand for?",
        "correct_answer": "Liquid Crystal Display",
        "incorrect_answers": [
            "Language Control Design",
            "Last Common Difference",
            "Liquid Crystal Display",
            "Long Continuous Design",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which operating system was released first?",
        "correct_answer": "Mac OS",
        "incorrect_answers": [
            "Windows",
            "Mac OS",
            "Linux",
            "OS/2",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following is a personal computer made by the Japanese company Fujitsu?",
        "correct_answer": "FM-7",
        "incorrect_answers": [
            "PC-9801",
            "Xmillennium ",
            "FM-7",
            "MSX",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": ".at is the top-level domain for what country?",
        "correct_answer": "Austria",
        "incorrect_answers": [
            "Argentina",
            "Australia",
            "Austria",
            "Angola",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is known as &quot;the brain&quot; of the Computer?",
        "correct_answer": "Central Processing Unit",
        "incorrect_answers": [
            "Motherboard",
            "Central Processing Unit",
            "Graphics Processing Unit",
            "Keyboard",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What was the first Android version specifically optimized for tablets?",
        "correct_answer": "Honeycomb",
        "incorrect_answers": [
            "Eclair",
            "Honeycomb",
            "Froyo",
            "Marshmellow",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When did the online streaming service &quot;Mixer&quot; launch?",
        "correct_answer": "2016",
        "incorrect_answers": [
            "2013",
            "2016",
            "2009",
            "2011",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which programming language was developed by Sun Microsystems in 1995?",
        "correct_answer": "Java",
        "incorrect_answers": [
            "Python",
            "Java",
            "Solaris OS",
            "C++",
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Approximately how many Apple I personal computers were created?",
        "correct_answer": "200",
        "incorrect_answers": [
            "100",
            "200",
            "500",
            "1000",
        ]
    }
]





const high_score = JSON.parse(localStorage.getItem('highscore'));



highScore.innerText = high_score;

function showData() {
    let quizData = data[currentQuestion];
    question_container.innerText = quizData.question;
    fetchOptions(quizData)
}


function fetchOptions(quizData) {
    const ul = document.createElement("ul");
    quizData.incorrect_answers.forEach((option) => {
        const li = document.createElement("li");
        li.textContent = option;

        container.appendChild(li);

        next.classList.remove('active');
        li.addEventListener('click', () => {

            if (li.innerText === quizData.correct_answer) {
                score++
                wrongCount = 0
                next.classList.add('active');
                scoreContainer.innerText = score
                score > high_score ? localStorage.setItem('highscore', JSON.stringify(score)) : score;

                li.classList.remove('correct');
                li.classList.remove('wrong');
            } else if (li.innerText !== quizData.correct_answer) {
                wrongCount++
                if (wrongCount >= 2) {
                    score = 0
                    scoreContainer.innerText = score
                    gameOver()

                }
                li.classList.add('wrong');
                li.classList.remove('correct');
            }
        })
        container.appendChild(ul);
    })
}


startBtn.addEventListener('click', () => {
    showData();
    startBtn.classList.add('active');
 

})


next.addEventListener("click", () => {

    currentQuestion++;
    clear();
    showData();

});

function clear() {
    question_container.innerText = "";
    container.innerText = "";
}


function gameOver() {
    alert('game over')
    startBtn.classList.remove('active');
        window.location='/'
    score = 0
    next.classList.remove('active');
    wrongCount = 0
    clear()

}

