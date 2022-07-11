const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

btn.addEventListener("click", changeColor);

function changeColor() {
  const hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}
