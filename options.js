let page = document.getElementById("colorWell");
let selectedClassName = "current";


var colorWell
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

/INITIALISATION/

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

/REACTION/

function updateFirst(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}

/QUAND SELECTEUR FERMER : RIEN BOUGE/

function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}

