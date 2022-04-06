let page = document.getElementById("buttonDiv");
let selectedClassName = "current";


// Reacts to a button click by marking marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
    let currentColor = data.color;

    // For each color we were provided…
    for (let buttonColor of buttonColors) {
      // …crate a button with that color…
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      // …mark the currently selected color…
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

// Initialize the page by constructing the color options
constructOptions(presetButtonColors);

////////////////////////////////////////////////////////////////////
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
var colorWell
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
function updateFirst(event) {
  var backgroundColor = document.querySelector("backgroundColor");

  if (backgroundColor) {
    backgroundColor.style.color = event.target.value;
  }
}
////////////////////////////////////////////////////////////////////