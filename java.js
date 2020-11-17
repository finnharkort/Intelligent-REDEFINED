let content = document.querySelector("#title");
let body = document.querySelector("body");

document.querySelector("#grid-link").addEventListener("click", () => {
  content.classList.add("hidden");
  content.classList.remove("visible");
  body.classList.add("bodyHidden");
});
