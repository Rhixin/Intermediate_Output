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

function scrollSection(direction) {
  const sectionBody = document.querySelector(".section-body");
  const scrollAmount = 400;

  // Scroll the section based on direction (-1 for left, 1 for right)
  sectionBody.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth", // Smooth scroll
  });
}

function createInputFlashcardComponent() {
  const container = document.getElementById("add-card-body");

  if (!container) {
    console.error("Container with id 'add-card-body' not found.");
    return;
  }

  // Count the current flashcards
  const count = container.children.length + 1;

  // Create the new flashcard element
  const newFlashcard = document.createElement("div");
  newFlashcard.className = "input-item";
  newFlashcard.id = `input-item-${count}`;

  newFlashcard.innerHTML = `
      <div class="input-item-header">
        <h4 class="id-text">${count}</h4>
        <div class="clickable delete-input-button" onclick="deleteInputFlashcardComponent(${count})">
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
            placeholder="Enter Definition"
          />
          <div class="input-footer">
            <span>DEFINITION</span>
          </div>
        </div>
      </div>
    `;

  container.appendChild(newFlashcard);
}

function deleteInputFlashcardComponent(id) {
  const container = document.getElementById("add-card-body");
  const itemToDelete = document.getElementById(`input-item-${id}`);

  if (itemToDelete) {
    // Remove the item from the container
    container.removeChild(itemToDelete);

    // Get all remaining items and update their IDs and indexes
    const remainingItems = container.getElementsByClassName("input-item");
    Array.from(remainingItems).forEach((item, index) => {
      // Update the ID of the item
      item.id = `input-item-${index + 1}`;

      // Update the displayed index in the <h4> element
      const idText = item.querySelector(".id-text");
      if (idText) {
        idText.textContent = index + 1;
      }

      // Update the onclick function of the delete button
      const deleteButton = item.querySelector(".delete-input-button");
      if (deleteButton) {
        deleteButton.setAttribute(
          "onclick",
          `deleteInputFlashcardComponent(${index + 1})`
        );
      }
    });
  } else {
    console.error(`Item with id 'input-item-${id}' not found.`);
  }
}

function createCardComponent(title, description, total) {
  return `
                <div class="card">

                  <div class="card-title">
                    <h3>${title}</h3>
                    <div>
                      <p>${total} items</p>
                    </div>
                  </div>

                  <div class="card-description">
                    <p>${description}</p>
                    <div class="fade-overlay"></div>
                  </div>

                  <div class="card-author">
                    
                    <ion-icon name="person-circle-outline"></ion-icon>
                    
                    <div>
                      <p>User11023</p>                     
                    </div>                 
                  </div>
                
                </div>`;
}
