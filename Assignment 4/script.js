function expand() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
let first, second, third, fourth, fifth, final;

function addStory() {
  first = document.getElementById("firstpiece").value;
  second = document.getElementById("secondpiece").value;
  third = document.getElementById("thirdpiece").value;
  fourth = document.getElementById("fourthpiece").value;
  fifth = document.getElementById("fifthpiece").value;

  combined =
    first + "\n" + second + "\n" + third + "\n" + fourth + "\n" + fifth;

  localStorage.setItem("final", combined);
}

window.onload = function finalStory() {
  final = localStorage.getItem("final");
  finalText = document.getElementById("final");
  finalText.value = final;
  expand.call(finalText);
};
