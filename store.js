const STORE = { remainingQuestions: [
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
  ],
  showIntroText: true,
  showScore: false,
  currentQuestion: null,
  score: {
  correctAnswers: 0
  incorrectAnswers: 0
  },
}