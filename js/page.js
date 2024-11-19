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
        <section id="quizzes">
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



        <section id="popular-questions">
          <h3>Popular Questions</h3>
          <div class="carousel-container">
            <div class="section-body card-container" id="popular-questions-section">
            
              <div class="card">
                <div class="card-description">
                  <p>Algebra</p>
                  <br>
                  <br>
                  <p>Contains nothing Lorem ipsum dolor sit amet. Sed amet porro ut sint distinctio At culpa beatae aut consequuntur facere in eveniet magni vel assumenda quia. Sed esse neque sed culpa quidem est velit aliquam. Aut ipsa labore quo iste illum aut molestiae quidem et recusandae soluta quo omnis dolor est facilis galisum! Qui nemo distinctio et sint excepturi est galisum expedita qui explicabo similique?Aut velit consequatur id fuga ipsum et vitae consectetur ut velit harum et aperiam aliquam ut dolore alias. Nam molestias minima et nemo alias aut voluptates consequatur hic cupiditate voluptatem ut autem voluptatem est porro repellendus est quia nisi.</p>
                  <div class="fade-overlay"></div>
                </div>
              </div>

              <div class="card">
                <div class="card-description">
                  <p>Physics</p>
                  <br>
                  <br>
                  <p>Contains nothing Lorem ipsum dolor sit amet. Sed amet porro ut sint distinctio At culpa beatae aut consequuntur facere in eveniet magni vel assumenda quia. Sed esse neque sed culpa quidem est velit aliquam. Aut ipsa labore quo iste illum aut molestiae quidem et recusandae soluta quo omnis dolor est facilis galisum! Qui nemo distinctio et sint excepturi est galisum expedita qui explicabo similique?Aut velit consequatur id fuga ipsum et vitae consectetur ut velit harum et aperiam aliquam ut dolore alias. Nam molestias minima et nemo alias aut voluptates consequatur hic cupiditate voluptatem ut autem voluptatem est porro repellendus est quia nisi.</p>
                  <div class="fade-overlay"></div>
                </div>
              </div>

              <div class="card">
                <div class="card-description">
                  <p>Spanish</p>
                  <br>
                  <br>
                  <p>Contains nothing Lorem ipsum dolor sit amet. Sed amet porro ut sint distinctio At culpa beatae aut consequuntur facere in eveniet magni vel assumenda quia. Sed esse neque sed culpa quidem est velit aliquam. Aut ipsa labore quo iste illum aut molestiae quidem et recusandae soluta quo omnis dolor est facilis galisum! Qui nemo distinctio et sint excepturi est galisum expedita qui explicabo similique?Aut velit consequatur id fuga ipsum et vitae consectetur ut velit harum et aperiam aliquam ut dolore alias. Nam molestias minima et nemo alias aut voluptates consequatur hic cupiditate voluptatem ut autem voluptatem est porro repellendus est quia nisi.</p>
                  <div class="fade-overlay"></div>
                </div>
              </div>

            </div>
          </div>
        </section>


        <!-- FOOTER -->
        <footer>
          <div class="footer-container">
            <div class="footer-section">
              <h3>About</h3>
              <ul>
                <li><a href="#quizzes">About Quizlet</a></li>
                <li><a href="#quizzes">Our Mission</a></li>
                <li><a href="#quizzes">Team</a></li>
                <li><a href="#quizzes">Careers</a></li>
                <li><a href="#quizzes">Press</a></li>
                <li><a href="#quizzes">Community Stories</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Products</h3>
              <ul>
                <li><a href="#popular-questions">Popular Questions</a></li>
                <li><a href="#popular-questions">Quizzes</a></li>
                <li><a href="#popular-questions">Learning Games</a></li>
                <li><a href="#popular-questions">Study Sets</a></li>
                <li><a href="#popular-questions">Mobile App</a></li>
                <li><a href="#popular-questions">AI Study Assistant</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="#suggested-section">Help Center</a></li>
                <li><a href="#suggested-section">Teacher Resources</a></li>
                <li><a href="#suggested-section">Student Resources</a></li>
                <li><a href="#suggested-section">Blog</a></li>
                <li><a href="#suggested-section">Webinars</a></li>
                <li><a href="#suggested-section">Developer API</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="#suggested-section">Contact Support</a></li>
                <li><a href="#suggested-section">FAQs</a></li>
                <li><a href="#suggested-section">Report an Issue</a></li>
                <li><a href="#suggested-section">Privacy Policy</a></li>
                <li><a href="#suggested-section">Terms of Service</a></li>
                <li><a href="#suggested-section">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </footer>`;

  container.innerHTML = content;

  const cardContainer = document.querySelector(".card-container");

  (async function loadQuizzes() {
    try {
      const quizzes = await fetchQuizzes();
      let content = "";
      quizzes.forEach((element) => {
        content += createCardComponent(
          element.quiz_id,
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

function QuizPage(id) {
  (async function loadQuizzes() {
    try {
      const quizzes = await fetchQuizzes();

      const quiz = quizzes[id - 1];

      const container = document.getElementById("dynamic-container");

      // Check if container exists
      if (!container) {
        console.error("Container with id 'dynamic-container' not found.");
        return;
      }

      const questions_string = JSON.stringify(quiz.questions);

      container.innerHTML = `
          <div>
            <section id="quiz-header">
              <h1>${quiz.title}</h1>
              
              <div id="quiz-reviews">
                <ion-icon name="star"></ion-icon>
                <p>5.0 (99 reviews)</p>
              </div>

              
              
            </section>
  
            <section class="flip-container clickable" id="flashcard-board" onclick="flipBoard(this)">
                  <div class="flipper">
                    <div class="front">
                      <p id="flashcard-text-term" class="flashcard-text">${
                        quiz.questions[0].term
                      }</p>
                    </div>
                    <div class="back">
                      <p id="flashcard-text-definition" class="flashcard-text">${
                        quiz.questions[0].definition
                      }</p>
                    </div>
                  </div>
            </section>

            <section id="quiz-controls">
              <div class="flash prev clickable" onclick='newFlashCard(${-1},${questions_string})' >
                <ion-icon name="arrow-back"></ion-icon>
              </div>
              <div class="page-indicator">
                <p id="question-number">1</p>
                <p>/ ${quiz.questions.length}</p>
              </div>
              <div class="flash next clickable" onclick='newFlashCard(${1},${questions_string})' >
                <ion-icon name="arrow-forward"></ion-icon>
              </div>
            </section>

            <div class="indicator">
              <div class="line-indicator-light">
                <div class="line-indicator-dark"></div>
              </div>
            </div>


            <div class="author-container">
              <div class="author-profile">
                <img src="https://api.multiavatar.com/Binx Bond.svg" >
              </div>

              <div class="author-name">
                <p>Created by</p>
                <h4>User11023</h4>
              </div>

            </div>
          </div>`;
    } catch (error) {
      console.error("Error loading quizzes:", error);
    }
  })();
}

window.onload = HomePage;
