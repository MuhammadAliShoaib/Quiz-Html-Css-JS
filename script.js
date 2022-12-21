var questions = [
  {
    Question: "MS word is software of ____",
    CorrectAns: "Microsoft",
    Options: ["Apple", "Android", "Google", "Microsoft"],
  },
  {
    Question: "Which is the word processing software?",
    CorrectAns: "MS word 2007",
    Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
  },
  {
    Question: "MS Word is ____ software.    ",
    CorrectAns: "Word processing",
    Options: [
      "Web browser",
      "Word processing",
      "Operating system",
      "Antivirus",
    ],
  },
  {
    Question: "The valid format of MS Word is __",
    CorrectAns: ".doc",
    Options: [".exe", ".doc", ".png", " .jpeg"],
  },
  {
    Question: "What program is used in MS-Word to check the spelling?",
    CorrectAns: "Spelling & Grammar",
    Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
  },
  {
    Question: "A word gets selected by clicking it",
    CorrectAns: "Twice",
    Options: [" Once", "Twice", "Three times", "Four times"],
  },
  {
    Question: "The center the selected text, the shortcut key is",
    CorrectAns: "Ctrl + E",
    Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
  },
  {
    Question: "Which option is not available in Microsoft office button?",
    CorrectAns: "Bold",
    Options: ["Bold", "New", "Save", "Open"],
  },
  {
    Question:
      "_____ is the change the way text warps around the selected object.",
    CorrectAns: "Text wrapping",
    Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
  },
  {
    Question: "A major step before taking print of the document is",
    CorrectAns: "Both b and c",
    Options: [
      "To save the document",
      "To set paper setting",
      "To see print preview of the document",
      "Both b and c",
    ],
  },
];

var questionNum = document.getElementById("questionNum");
var question = document.getElementById("question");
var buttons = document.getElementById("buttons");
var box = document.getElementById("box");
var percentage = document.getElementById("percentage");
var index = 0;
var marks = 0;

function renderQuestion() {
  questionNum.innerHTML = `Question : ${index + 1}/${questions.length} `;
  question.innerHTML = questions[index].Question;
  buttons.innerHTML = "";
  for (var i = 0; i < questions[index].Options.length; i++) {
    buttons.innerHTML += `<div class="col-md-6 my-2">
        <button type="button" onclick="nextQuestion('${questions[index].Options[i]}','${questions[index].CorrectAns}')"  class="btn btn-primary btn-lg w-100 ">${questions[index].Options[i]}</button>
        </div>`;
  }
}
renderQuestion();

function nextQuestion(a, b) {
  if (index + 1 < questions.length) {
    index++;
    renderQuestion();
  } else {
    box.style.display = "none";
  }
}
