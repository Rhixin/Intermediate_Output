//API HANDLERS
function loadQuizData() {
  return fetch("quiz.json")
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
