
let questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Home Text Markup Language"],
    answer: 0
  },
  {
    question: "Which programming language is known as the backbone of web development?",
    options: ["Python", "JavaScript", "C++", "Ruby"],
    answer: 1
  },
  {
    question: "What is the main purpose of CSS in web development?",
    options: ["To structure web content", "To style web pages", "To program web applications", "To store data"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

// Display initial question
displayQuestion();

// Event listener for submit button
document.getElementById('submit-btn').addEventListener('click', checkAnswer);

function displayQuestion() {
  const questionText = document.getElementById('question-text');
  const options = document.getElementById('options');

  questionText.textContent = questions[currentQuestion].question;
  options.innerHTML = '';

  questions[currentQuestion].options.forEach((option, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = `option${index + 1}`;
    input.name = 'option';
    const label = document.createElement('label');
    label.textContent = option;
    label.htmlFor = `option${index + 1}`;
    li.appendChild(input);
    li.appendChild(label);
    options.appendChild(li);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption.id === `option${correctAnswer + 1}`) { // add 1 to correctAnswer
      score++;
      // Trigger confetti for correct answer
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      // All questions answered, display final score
      const resultText = document.getElementById('result-text');
      resultText.textContent = `Your final score is ${score} out of ${questions.length}`;
      resultText.style.textAlign = 'center';
      resultText.style.fontSize = '24px';
      resultText.style.fontWeight = 'bold';
      resultText.style.margin = '40px auto';

      // Hide questions and submit button
      const options = document.getElementById('options');
      const submitBtn = document.getElementById('submit-btn');
      const questionText = document.getElementById('question-text');
      options.style.display = 'none';
      submitBtn.style.display = 'none';
      questionText.style.display = 'none';
    }
  }
}
