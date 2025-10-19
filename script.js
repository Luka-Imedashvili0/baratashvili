const responses = {
    "hello": "Hey there! 👋",
    "how are you": "I'm great, thanks for asking! 😊",
    "what is your name": "I'm your friendly typing bot 🤖",
    "bye": "Goodbye! Have a nice day! 👋"
  };
  
  const questionInput = document.getElementById("questionInput");
  const askBtn = document.getElementById("askBtn");
  const answerEl = document.getElementById("answer");
  
  // Typing effect function
  function typeText(element, text, speed = 40) {
    element.textContent = "";
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }
  
  // Function to handle the question
  function handleQuestion() {
    const input = questionInput.value.toLowerCase().trim();
    if (input === "") return; // Ignore empty input
  
    const answer = responses[input] || "Hmm... I don’t know that one 🤔";
    typeText(answerEl, answer);
  
    questionInput.value = ""; // clear input
  }
  
  // When button is clicked
  askBtn.addEventListener("click", handleQuestion);
  
  // When Enter key is pressed
  questionInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleQuestion();
    }
  });