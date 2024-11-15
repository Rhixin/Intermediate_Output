function toggleMenu() {
  // Select all elements with the 'collapse' class
  const collapsibleElements = document.querySelectorAll(".collapse");
  const main = document.getElementById("main");

  // Loop through each element and toggle its display
  collapsibleElements.forEach((element) => {
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "flex";
      main.style.marginLeft = "15rem";
    } else {
      element.style.display = "none";
      main.style.marginLeft = "4.75rem";
    }
  });
}

function toggleProfileModal() {
  const profile_modal = document.getElementById("profile-modal");
  profile_modal.classList.toggle("active");

  const add_modal = document.getElementById("add-modal");
  add_modal.classList.remove("active");
}

function toggleAddModal() {
  const add_modal = document.getElementById("add-modal");
  add_modal.classList.toggle("active");

  const profile_modal = document.getElementById("profile-modal");
  profile_modal.classList.remove("active");
}

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
            <div class="input-item">
              <div>
                <h4>1</h4>
              </div>

              <div>
                <div class="item-title">
                  <input
                    type="text"
                    name="term"
                    class="input-field"
                    placeholder="Enter Title"
                  />
                  <div class="input-footer">
                    <span>TITLE</span>
                  </div>
                </div>

                <div class="item-definition">
                  <input
                    type="text"
                    name="definition"
                    class="input-field"
                    placeholder="Enter Title"
                  />
                  <div class="input-footer">
                    <span>DEFINITION</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="add-card-footer"
            class="clickable"
            onclick="createInputFlashcardComponent(2)"
          >
            <ion-icon name="add-circle-outline"></ion-icon>
            <h5>ADD A CARD</h5>
          </section>

          <section>
            <button>Save</button>
          </section>
        </div>`;

  // Add content to the container
  container.innerHTML = content;
}

function createInputFlashcardComponent(id) {
  content = `
            <div class="input-item">
              <div>
                <h4>${id}</h4>
              </div>

              <div>
                <div class="item-title">
                  <input
                    type="text"
                    name="term"
                    class="input-field"
                    placeholder="Enter Title"
                  />
                  <div class="input-footer">
                    <span>TITLE</span>
                  </div>
                </div>

                <div class="item-definition">
                  <input
                    type="text"
                    name="definition"
                    class="input-field"
                    placeholder="Enter Title"
                  />
                  <div class="input-footer">
                    <span>DEFINITION</span>
                  </div>
                </div>
              </div>
            </div>
    `;

  container = document.getElementById("add-card-body");

  container.innerHTML += content;
}
