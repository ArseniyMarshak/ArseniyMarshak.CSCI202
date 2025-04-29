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
    first + "<br>" + second + "<br>" + third + "<br>" + fourth + "<br>" + fifth;

  localStorage.setItem("final", combined);
}

window.onload = function finalStory() {
  final = localStorage.getItem("final");
  document.getElementById("final").value = final;
};
