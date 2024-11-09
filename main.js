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
