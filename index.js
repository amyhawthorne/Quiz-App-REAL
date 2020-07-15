'use strict';

const STORE = [
  {
    questionID: "1",
    question: "Who does Michael fire in season 1 of The Office?",
    answers: {
        a: "Meredith",
        b: "Creed",
        c: "Devon",
        d: "Jim",

      },
      correctAnswer: "c",
      correctAnswerImage: "question_1_right.gif", alt: "An animated gif of Michael Scott with a serious face"
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
    correctAnswer: "a",
    correctAnswerImage: "question_2_right.gif", alt: "an animated gif of Dwight Schrute saying Its True"

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
    correctAnswer: "a",
    correctAnswerImage: "question_3_right.gif", alt: "An animated gif of Creed winking"
  },
];

function renderThePage () {
    //this code will render the quiz page in the DOM
    console.log('`renderThePage` ran');
    $('.invite-to-take-quiz').show();

};

function startQuiz () {
  //this code will enable the page to transition from intro text to actual quiz questions
  //it will render the first question
  //Could this + "showQuestions" actually be the same function? 
    $('.get-started').on('click', () => {
        $('.take-the-quiz-form').show();
        $('.invite-to-take-quiz').hide();

})};

function showQuestions () {
//select a question from the STORE
//display a question from the store
//only show each question 1 time per user session  
};

function checkAnswers () {
//this function will check if the answer given is correct or incorrect or incomplete (not selected)
//if not selected, display error
//if selected, display a string and image that indicates whether answer was correct/incorrect    
};

function tallyScore () {
//keep track of how many of the 30 questions have been answered correctly
//display tallied score after each answered question
};

function showFinalScore () {
//show final tallyScore result after all 30 questions have been answered 
//determine what user's final grade is based on number of correct answers
//display string indicating that final grade
};
