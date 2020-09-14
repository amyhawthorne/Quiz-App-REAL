//'use strict';
const STORE = {
    remainingQuestions: [{
            questionID: "1",
            question: "Who does Michael fire in season 1 of The Office?",
            answers: {
                a: "Meredith",
                b: "Creed",
                c: "Devon",
                d: "Jim",

            },
            correctAnswer: "Devon",
            correctAnswerImage: "gifs/question_1_right.gif",
            correctAnswerAlt: "An animated gif of Michael Scott with a serious face",
            incorrectAnswerImage: "gifs/wrong-answer-dwight.gif",
            incorrectAnswerAlt: "Dwight makes an angry face"
        },
        {
            questionID: "2",
            question: "What type of farm does Dwight own?",
            answers: {
                a: "Beet",
                b: "Dairy",
                c: "Apricot",
                d: "Cattle",

            },
            correctAnswer: "Beet",
            correctAnswerImage: "gifs/question_2_right.gif",
            alt: "an animated gif of Dwight Schrute saying Its True",
            incorrectAnswerImage: "gifs/wrong-answer-dwight.gif",
            incorrectAnswerAlt: "Dwight makes an angry face" 
        },
        {

            questionID: "3",
            question: "Which character confesses to running a “fake ID business” out of the trunk of their car?",
            answers: {
                a: "Creed Bratton",
                b: "Bob Vance",
                c: "Meredith Palmer",
                d: "Phyllis Vance",

            },
            correctAnswer: "Creed Bratton",
            correctAnswerImage: "gifs/question_3_right.gif",
            alt: "An animated gif of Creed winking",
            incorrectAnswerImage: "gifs/wrong-answer-dwight.gif",
            incorrectAnswerAlt: "Dwight makes an angry face"
        },
    ],
    showIntroText: true,
    showScore: false,
    currentQuestion: null,
    score: {
        correctAnswers: 0,
        incorrectAnswers: 0
    },
};

$(function() {
    console.log("initial page has rendered")
    renderEverything(STORE)
});

function renderEverything(STORE) {
    renderStoreIntro(STORE);
    renderQuiz(STORE);
    renderProgress(STORE);
    renderScore(STORE);
    renderFinalScore(STORE);

};

function renderStoreIntro(STORE) {
    if (STORE.showIntroText === true) {
        console.log("intro text has been rendered")
        $('.invite-to-take-quiz').show();
    } else {
        $('.invite-to-take-quiz').hide();
    }
};

function renderQuiz(STORE) { 
     
    (STORE.showIntroText = $('.invite-to-take-quiz'));
    //Determines what to show on intro screen
    if (STORE.currentQuestion === null) {
        $('.show-question').hide();
        $('.show-progress').hide();
        //$('.show-score').hide();
        $('.completed-quiz-score').hide();
    } else {
        //Generates HTML to render quiz questions
        const answerOptionsHtml =  `<input type="radio" name="option"  
            value="${STORE.currentQuestion.answers.a}" required></input>
            <label for "${STORE.currentQuestion.answers.a}">"${STORE.currentQuestion.answers.a}"</label><br>
            <input type="radio" name="option"  
            value="${STORE.currentQuestion.answers.b}" required></input>
            <label for "${STORE.currentQuestion.answers.b}">"${STORE.currentQuestion.answers.b}"</label><br>
            <input type="radio" name="option"  
            value="${STORE.currentQuestion.answers.c}" required></input>
            <label for "${STORE.currentQuestion.answers.c}">"${STORE.currentQuestion.answers.c}"</label><br>
            <input type="radio" name="option"  
            value="${STORE.currentQuestion.answers.d}" required></input>
            <label for "${STORE.currentQuestion.answers.d}">"${STORE.currentQuestion.answers.d}"</label><br>`
        const questionHtml = `<div>
            <form id="quiz-questions"
            <form method="POST" action="/submit/">
            <fieldset name="mulitple choice questions">
            <legend class="question">${STORE.currentQuestion.question}</legend>
            ${answerOptionsHtml}
            <button type="submit" id="submit-button">Submit</button>
            </legend>
            </fieldset> 
            </form>
            </div>`;
        //indicates what to show and hide when quiz starts    
        $('.show-question').html(questionHtml);
        $('.show-question').show();
        $('.show-progress').show();
        $('.show-score').show();
        $('.completed-quiz-score').hide();
        $('.feedback-on-answer').show();
    };

    //Event listener to start quiz. Switches out "Store Intro" HTML for first quiz question
    $('#get-started').on('click', () => {
        (STORE.currentQuestion = STORE.remainingQuestions[0]);
        console.log("the start quiz button has been clicked"); 
        renderEverything(STORE);
        return STORE.currentQuestion;
        (STORE.showIntroText === false);
    });
};

function renderProgress() {
    //Shows progress by showing the current question number, out of the 30 total questions
    console.log('Render Progress has rendered');
    (STORE.currentQuestion = STORE.remainingQuestions[0]);
    var showProgressHtml = `Question ${STORE.currentQuestion.questionID} of 30`;
    $('.show-progress').html(showProgressHtml);
    console.log($('.show-progress').length);
};

function renderScore() {
    console.log('RenderScore has rendered');
    let correctAnswerTally = (STORE.score.correctAnswers);
    let incorrectAnswerTally = (STORE.score.incorrectAnswers);

    //generates html for message that appears based on whether selected answer is correct or incorrect
    const feedbackIfCorrectHtml = 
    `<div class="feedback-correct">
        Your answer is correct! Call the party planning committee and order whatever Angela permits you to order! (Please stay within budget).
        <img class="Correct-Answer" src="${STORE.currentQuestion.correctAnswerImage}" alt="${STORE.currentQuestion.correctAnswerAlt}"/>  
        </div>`;
    
    const feedbackIfIncorrectHtml = 
    `<div class="feedback-incorrect">
        Your answer is incorrect. As Michael would say: It feels like somebody took my heart and dropped it into a bucket of boiling tears.
        <img class="Incorrect-Answer" src="${STORE.currentQuestion.incorrectAnswerImage}" alt="${STORE.currentQuestion.incorrectAnswerAlt}"/> 
        </div>`; 
    
        //determine whether or not an answer is correct or incorrect and logs it to the STORE, calculating the total correct score and incorrect score
    
    $('#submit-button').on('click', () => {
        event.preventDefault();
        $('#quiz-questions.option').required = true;
        $('.feedback-on-answer').show();
        const selected = $('input:checked');
        let selectedAnswerValue = selected.val();
        console.log(selectedAnswerValue + ` was selected`);
        let correctAnswerFound = selectedAnswerValue === STORE.currentQuestion.correctAnswer;
        
        /*for (let answerKey in STORE.currentQuestion.answers) {
            let answerValue = STORE.currentQuestion.answers[answerKey]; 
            if (answerValue === STORE.currentQuestion.correctAnswer) {
            correctAnswerFound === true;
            console.log(answerValue);
            console.log(STORE.currentQuestion.correctAnswer);
            };
        };*/

        if (correctAnswerFound === true) {
            correctAnswerTally = (STORE.score.correctAnswers + 1);
            console.log(correctAnswerTally + ` is the number of correct answers counted`);
            console.log(`A correct answer was counted`);
            $('.feedback-on-answer').html(feedbackIfCorrectHtml);
        } 
        else {
            incorrectAnswerTally = (STORE.score.incorrectAnswers + 1);
            //console.log("An incorrect answer was counted");
            console.log(incorrectAnswerTally + ` is the number of incorrect answers counted`);
            $('.feedback-on-answer').html(feedbackIfIncorrectHtml);
        };

        console.log(correctAnswerFound);

        


       
        //generates score html
        const renderScoreHtml = `${correctAnswerTally} answers correct out of 30
        <p><button type="button" id="next-question-button">Next Question</button></p>`;
        $('.show-score').html(renderScoreHtml);
        console.log($('.show-score').length);
        console.log(`Show Score has rendered`);
        console.log("submit has been clicked");
        renderEverything(STORE);

    });

    $("#next-question-button").on('click', () => {
        console.log(`Next Question has been clicked`)
        });
};

function renderFinalScore() {
    console.log('Final Score has rendered');
    //generates html to show user their final score once the 30 questions have all been answered. 
    let correctAnswerTally = (STORE.score.correctAnswers);
    let incorrectAnswerTally = (STORE.score.incorrectAnswers);
    let renderFinalScorePoorHtml = `You got ${correctAnswerTally} out of 30 answers correct! Too much time in the breakroom. Back to work! 
    <button type="button" id="try-again">Try Again</button>`
    $('.completed-quiz-score').html(renderFinalScorePoorHtml);
    let renderFinalScoreAverageHtml = `You got ${correctAnswerTally} out of 30 answers correct! Not bad! You could soon be named assistant to the regional manager.`
    let renderFinalScoreGoodHtml = `You got ${correctAnswerTally} out of 30 answers correct! David Wallace is calling! You're about to receive a promotion from Corporate.`
    console.log($('.completed-quiz-score').length);
    //determine which html to display
    if ((correctAnswerTally <= 10) && (correctAnswerTally + incorrectAnswerTally === 30)) {
        $('completed-quiz-score').html(renderFinalScorePoorHtml)
        }
        else if ((correctAnswerTally > 10 && correctAnswerTally < 20) && (correctAnswerTally + incorrectAnswerTally === 30)) {
            $('completed-quiz-score').html(renderFinalScoreAverageHtml)
        }
        else {
            $('completed-quiz-score').html(renderFinalScoreAverageHtml)
        };

    //button to restart the quiz
    $('#try-again').on('click', () => {
        renderStoreIntro(STORE);
    });
};
  
    

