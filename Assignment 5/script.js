window.onload = function onload() {
  const collection = document.getElementById("collection");
  collection.style.display = "none";
};

function display() {
  const display = document.getElementById("display");
  display.addEventListener("click", toggle());
  function toggle() {
    if (collection.style.display == "none") {
      display.innerHTML = "Hide the Giants";
      collection.style.display = "block";
      fetch("mountains.json")
        .then((response) => response.json())
        .then((object) => {
          for (const mountain of object) {
            const cardContent = document.createElement("section");
            cardContent.classList.add("card");
            cardContent.innerHTML = ` <a href = ${mountain.link}><img src=${mountain.image}></a><h2>${mountain.title}</h2> <h3>Native Name: ${mountain.native_name}</h3>
            <h4>Elevation: ${mountain.elevation} </br>Prominence: ${mountain.prominence}</h4>
            <p>${mountain.description}</p>
            <p>Location: ${mountain.location}</p>
            <p>Range: ${mountain.range}</p>
            <a href=${mountain.climb}> Climbing and Summit Info</a>`;
            collection.appendChild(cardContent);
          }
        });
    } else {
      collection.style.display = "none";
      display.innerHTML = "See the Giants";
    }
  }
}
