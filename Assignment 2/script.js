let theme;
let themeCard;
let theme_description;

function themeOnClick(theme_button) {
  theme = theme_button.innerHTML.trim();
  themeCard = document.getElementsByClassName("theme_card")[0];
  themeCard.getElementsByTagName(
    "p"
  )[0].innerHTML = `You selected the ${theme}, hover over the theme card to understand what a ${theme} entails!`;
}

function cardOver() {
  switch (theme) {
    case "Serious Theme":
      themeCard.style.color = "#ff4801";
      themeCard.style.fontFamily = "Tinos, serif";
      themeCard.getElementsByTagName("p")[0].style.backgroundColor = "#051341";
      theme_description = `Within the ${theme} you will find that the font is set to Tinos, which I chose given its simplicity and look of giving off a serious tone. The coloring the page will navy blue with an orange text in order to convey a serious, trustworthy theme. Color is inspired by Shutterstock and their blog on color palettes + emotions`;
      break;
    case "Simple Theme":
      themeCard.style.fontFamily = "Noto Sans Display, serif";
      themeCard.style.color = "#554940";
      themeCard.getElementsByTagName("p")[0].style.backgroundColor = "#C9AD93";
      theme_description = `In the ${theme} you can notice a shift in the tone. The theme uses a Noto Sand Display font which gives of a very simple, minimal tone which could be preferred when creating a simple design. The color tones were inspired by a blog post on typography by Bejamas where colors like Taupe which as according to the article "add warmth and sophistication" while Beige as the background for the softer look of an off-white color.`;
      break;
    case "Vibrant Theme":
      themeCard.style.fontFamily = "Sriracha, serif";
      themeCard.style.color = "#F8F8F8";
      themeCard.getElementsByTagName("p")[0].style.backgroundColor = "#BD83E2";
      theme_description = `For the ${theme} I decided to try out something different. Colors were inspired by the same Shutterstock blog post. The Lavender background being more mellow but pops to the eye while the whiter text pops to the eye and makes it a little easier to read the text in contrast. The font chosen was Sriracha which I believed was an interesting font that pops which I wanted to align with the vibrant theme`;
      break;
    case "Fun Theme":
      theme_description = `In the ${theme} I went with a more fun approach using a font called Henny Penny which is a very fun and even goofy theme. Though the font and colors don't serve in accessibility for viewers, I wanted to see how else you can use colors to create a fun theme. Using a lime green text with a bright pink background gives the viewer a sense of fun colors. Shutterstock was used as an inspiration for the font once again in its discussion of multicolored themes being uplifting.`;
      themeCard.style.color = "#A6C871";
      themeCard.style.fontFamily = "Henny Penny, serif";
      themeCard.getElementsByTagName("p")[0].style.backgroundColor = "#D02C8f";
      break;
    default:
      themeCard.getElementsByTagName("p")[0].innerHTML =
        "Please select a theme!";
  }
  themeCard.getElementsByTagName("p")[0].innerHTML = theme_description;
}
function cardOut() {
  themeCard.getElementsByTagName("p")[0].innerHTML =
    "Select a theme button to preview or transform the whole page by clicking a number 1 through 4";
}

document.addEventListener("keydown", function (number) {
  let keypress = number.key;
  switch (keypress) {
    case "1":
      document.body.style.backgroundColor = "#051341";
      document.body.style.color = "#ff4801";
      document.body.style.fontFamily = "Tinos, serif";
      break;
    case "2":
      document.body.style.backgroundColor = "#C9AD93";
      document.body.style.color = "#554940";
      document.body.style.fontFamily = "Noto Sans Display, serif";
      break;
    case "3":
      document.body.style.backgroundColor = "#BD83E2";
      document.body.style.color = "#F8F8F8";
      document.body.style.fontFamily = "Sriracha, serif";
      break;
    case "4":
      document.body.style.backgroundColor = "#D02C8f";
      document.body.style.color = "#A6C871";
      document.body.style.fontFamily = "Henny Penny, serif";
      break;
  }
});
