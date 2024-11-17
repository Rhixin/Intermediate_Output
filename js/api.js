//API HANDLERS
function loadQuizData() {
  return fetch("data/quiz.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function checkJSON() {
  loadQuizData().then((data) => {
    console.log(data);
  });
}

function createNewQuiz() {}

//REALLLLLLL STUUFFF HEREEEEE -----------------------------------------------------------------------------------
// Function to fetch quizzes from quiz.json
async function fetchQuizzes() {
  try {
    const response = await fetch("data/quiz.json");
    if (!response.ok) {
      throw new Error("Failed to fetch quizzes");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function saveQuizzes(quizzes) {
  try {
    const response = await fetch("server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quizzes),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message);
    } else {
      console.error("Failed to save quizzes.");
    }
  } catch (error) {
    console.error("Failed to save quizzes:", error);
  }
}

async function saveQuiz() {
  const quizzes = await fetchQuizzes();
  const title = document.querySelector('input[name="title"]').value;
  const description = document.querySelector(
    'textarea[name="description"]'
  ).value;

  const inputItems = document.querySelectorAll(".input-item");

  let new_quiz = {
    quiz_id: quizzes.length + 1,
    title: title || "",
    description: description || "",
    questions: [],
  };

  // Loop through input items to extract terms and definitions
  inputItems.forEach((item, index) => {
    const term = item.querySelector('input[name="term"]').value || "";
    const definition =
      item.querySelector('input[name="definition"]').value || "";

    let flashcard = {
      card_id: index + 1,
      term: term,
      definition: definition,
    };

    new_quiz.questions.push(flashcard);
  });

  quizzes.push(new_quiz);

  //Save again to the database
  await saveQuizzes(quizzes);

  HomePage();
}
