function FlashcardPage() {
  const container = document.getElementById("dynamic-container");

  // Check if container exists
  if (!container) {
    console.error("Container with id 'dynamic-container' not found.");
    return;
  }

  // Declare the content string properly
  const content = `
          <div id="add-card-page">
            <section id="add-card-header">
              <h1>Create a new flashcard set</h1>
              <div>
                <input
                  placeholder="Enter title, like 'Biology - Chapter 22: Evolution'"
                  name="title"
                  id="title"
                  class="header-input"
                />
                <textarea
                  placeholder="Add a description.."
                  name="description"
                  id="description"
                  class="header-input"
                ></textarea>
              </div>
            </section>
  
            <section id="add-card-body">
              
            </section>
  
            <section
              id="add-card-footer"
              class="clickable"
              onclick="createInputFlashcardComponent()"
            >
              <ion-icon name="add-circle-outline"></ion-icon>
              <h5>ADD A CARD</h5>
            </section>
  
            <section id="save-quiz-wrapper">
              <button id="save-quiz-btn" class="clickable" onclick="saveQuiz()">Save</button>
            </section>
          </div>`;

  // Add content to the container
  container.innerHTML = content;

  createInputFlashcardComponent();
}

function HomePage() {
  const container = document.getElementById("dynamic-container");

  // Check if container exists
  if (!container) {
    console.error("Container with id 'dynamic-container' not found.");
    return;
  }

  const content = `
        <section>
          <h3>Recent</h3> 
            <div class="carousel-container">
              <button class="carousel-button prev" onclick="scrollSection(-1)">❮</button>
              <div class="section-body card-container">
              </div>
              <button class="carousel-button next" onclick="scrollSection(1)">❯</button>
            </div>
        </section>
        <section>
          <h3>Suggested</h3>
          <div class="carousel-container">
          <div class="section-body card-container" id="suggested-section">
            
              <div class="card">

                <div class="card-title">
                  <h3>Dummy Quiz Title</h3>
                  <div>
                    <p>9999 items</p>
                  </div>
                </div>

                <div class="card-description">
                  <p>Contains nothing Lorem ipsum dolor sit amet. Sed amet porro ut sint distinctio At culpa beatae aut consequuntur facere in eveniet magni vel assumenda quia. Sed esse neque sed culpa quidem est velit aliquam. Aut ipsa labore quo iste illum aut molestiae quidem et recusandae soluta quo omnis dolor est facilis galisum! Qui nemo distinctio et sint excepturi est galisum expedita qui explicabo similique?Aut velit consequatur id fuga ipsum et vitae consectetur ut velit harum et aperiam aliquam ut dolore alias. Nam molestias minima et nemo alias aut voluptates consequatur hic cupiditate voluptatem ut autem voluptatem est porro repellendus est quia nisi.</p>
                  <div class="fade-overlay"></div>
                </div>

                <div class="card-author">
                  <ion-icon name="person-circle-outline"></ion-icon>
                  <div>
                    <p>John Doe</p>                     
                  </div>                 
                </div>

  
              </div>


              <div class="card">

                <div class="card-title">
                  <h3>Universal Title</h3>
                  <div>
                    <p>12345 items</p>
                    
                  </div>
                </div>

                <div class="card-description">
                  <p>Lorem ipsum dolor sit amet. Sed amet porro ut sint distinctio At culpa beatae aut consequuntur facere in eveniet magni vel assumenda quia. Sed esse neque sed culpa quidem est velit aliquam. Aut ipsa labore quo iste illum aut molestiae quidem et recusandae soluta quo omnis dolor est facilis galisum! Qui nemo distinctio et sint excepturi est galisum expedita qui explicabo similique?Aut velit consequatur id fuga ipsum et vitae consectetur ut velit harum et aperiam aliquam ut dolore alias. Nam molestias minima et nemo alias aut voluptates consequatur hic cupiditate voluptatem ut autem voluptatem est porro repellendus est quia nisi.</p>

                  <div class="fade-overlay"></div>
                </div>

                <div class="card-author">
                  <ion-icon name="person-circle-outline"></ion-icon>
                  <div>
                    <p>Mark Zuckerberg</p>                     
                  </div>                 
                </div>

  
              </div>

              

              
            </div>
          </div>
        </section>
        `;

  container.innerHTML = content;

  const cardContainer = document.querySelector(".card-container");

  (async function loadQuizzes() {
    try {
      const quizzes = await fetchQuizzes();
      let content = "";
      quizzes.forEach((element) => {
        content += createCardComponent(
          element.title,
          element.description,
          element.questions.length
        );
      });

      cardContainer.innerHTML = content;
    } catch (error) {
      console.error("Error loading quizzes:", error);
    }
  })();
}

window.onload = HomePage;
