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
            <button id="save-quiz-btn" class="clickable">Save</button>
          </section>
        </div>`;

  // Add content to the container
  container.innerHTML = content;

  createInputFlashcardComponent();
}

function createInputFlashcardComponent() {
  container = document.getElementById("add-card-body");

  let count = 0;

  container.childNodes.forEach((node) => {
    if (node.nodeType === 1 && node.classList.contains("input-item")) {
      count++;
    }
  });

  count += 1;

  content = `
            <div class="input-item" id="input-item-${count}">
              <div class="input-item-header">
                <h4 class="id-text">${count}</h4>
                <div class="clickable" onclick="deleteInputItem(${count})">
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
              </div>

              <div>
                <div class="item-title">
                  <input
                    type="text"
                    name="term"
                    class="input-field input-term"
                    placeholder="Enter Title"
                  />
                  <div class="input-footer">
                    <span>TERM</span>
                  </div>
                </div>

                <div class="item-definition">
                  <input
                    type="text"
                    name="definition"
                    class="input-field input-definition"
                    placeholder="Enter Title"
                  />
                  <div class="input-footer">
                    <span>DEFINITION</span>
                  </div>
                </div>
              </div>
            </div>
    `;

  container.innerHTML += content;
}

function deleteInputItem(id) {
  let container = document.getElementById("add-card-body");
  let itemToDelete = document.getElementById(`input-item-${id}`);
  let inputElement = itemToDelete.querySelector("input"); // Get the input element

  // Store the input value
  let inputValue = inputElement ? inputElement.value : "";

  // Delete the item
  container.removeChild(itemToDelete);

  // Reorder remaining items and preserve input values
  let remainingItems = container.querySelectorAll(".input-item");
  remainingItems.forEach((item, index) => {
    // Update the item's ID
    item.id = `input-item-${index + 1}`;
    let idTextElement = item.querySelector(".id-text");
    idTextElement.textContent = `${index + 1}`;

    // If the item contains an input, restore its value
    let input = item.querySelector("input");
    if (input) {
      input.value = inputValue; // Reapply the stored value
    }
  });
}
