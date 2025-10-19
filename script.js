const responses = {
    "გამარჯობა ნიკოლოზ": "გაგიმარჯოს! 👋",
    "როგორ გიკითხო?": "სული მიფორიაქებს, მაგრამ ყოველი ტკივილი ახალ შუქად მეჩვენება ✨",
    "მადლობა და ნახვამდის!": "გემშვიდობებით, მაგრამ გახსოვდეთ — მერანი მუდამ წინ მიგაქროლებთ 🌙🐎",
    "შენს ლექსებში სევდა და იმედი ერთდროულად ჩანს. დღეს, ამ სამყაროში, ისევ იგრძნობდი იმედს?": "ადამიანი მუდამ ბრძოლაშია საკუთარ იმედთან. ჩემი დროის ტკივილი დაკარგული საქართველო იყო, თქვენი — დაკარგული სული. მაგრამ სანამ სევდა არის, იმედიც ცოცხლობს, რადგან სევდა სწორედ იმედის ძიებაა!",
    "როგორ შეხედავდი თანამედროვე საქართველოს, სადაც თითქოს თავისუფლებაა, მაგრამ ხალხი მაინც უღელქვეშ გრძნობს თავს?": "თავისუფლება მხოლოდ გარეგანი მდგომარეობა არაა — ის შინაგანი რწმენაა. მე ვოცნებობდი თავისუფალ სულზე, არა მხოლოდ თავისუფალ ქვეყანაზე. თქვენ მიიღეთ ის, რაზეც მე ვწერდი, მაგრამ დაკარგეთ ის, რაც მე მქონდა — სურვილი სულის თავისუფლებისა!",
    "რას ეტყოდი ახალგაზრდა თაობას, რომელიც ხშირად იმედგაცრუებულია?": "გახსოვდეთ, რომ იმედგაცრუება მხოლოდ იმ შემთხვევაში იბადება, როცა ოდესღაც გჯეროდათ. ამიტომ ნუ გეშინიათ იმედგაცრუების — ეშინოდეთ უგულობად ქცევის. ვინც ტკივილს გრძნობს, ის ჯერ კიდევ ცოცხალია!",
    "გრძნობდი თუ არა, რომ ხალხმა შენ სიცოცხლეში ვერ გაგიგო?": "დიახ, მაგრამ ნამდვილი სიტყვა დროში არ იკარგება. მე არ ვწერდი ჩემთვის — მე ვწერდი მომავალთათვის, რომლებიც ერთხელ წაიკითხავდნენ და იტყოდნენ: ‘ესეც ჩემი ტკივილია’. ახლა რომ გესაუბრებით, ვხედავ — ღირსი ყოფილა ლოდინი!",
    "რას გრძნობდით როცა თქვენი საყვარელი საქმიანობა ტრავმის გამო ვერ განახორციელეთ": "თითქოს სული დამიმძიმდა — თითქოს ფრთა მომტყდა, სანამ ცას შევხებოდი… მაგრამ მაშინ მივხვდი, რომ ზოგჯერ კალამიც ისეთივე იარაღია, როგორც ხმალი!",
  };
  
  const questionInput = document.getElementById("questionInput");
  const askBtn = document.getElementById("askBtn");
  const chatBox = document.getElementById("chatBox");
  
  // Typing animation for bot
  function typeMessage(text, speed = 20) {
    const msg = document.createElement("div");
    msg.classList.add("message", "bot");
    chatBox.appendChild(msg);
  
    let i = 0;
    function typing() {
      if (i < text.length) {
        msg.textContent += text.charAt(i);
        i++;
        chatBox.scrollTop = chatBox.scrollHeight; // scroll down while typing
        setTimeout(typing, speed);
      } else {
        chatBox.scrollTop = chatBox.scrollHeight; // final scroll
      }
    }
    typing();
  }
  
  function addUserMessage(text) {
    const msg = document.createElement("div");
    msg.classList.add("message", "user");
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight; // scroll down
  }
  
  // Handle sending message
  function handleSend() {
    const input = questionInput.value.trim();
    if (!input) return;
  
    addUserMessage(input);
  
    const lower = input.toLowerCase();
    const reply = responses[lower] || "ჰმმ რთული კითხვაა... ამის მისახვედრად კიდევ ერთი ლექსის დაწერა დამჭირდება...🤔";
  
    setTimeout(() => typeMessage(reply), 500); // bot types after delay
    questionInput.value = "";
  }
  
  // Button click
  askBtn.addEventListener("click", handleSend);
  
  // Enter key
  questionInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") handleSend();
  });