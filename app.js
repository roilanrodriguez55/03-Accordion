const doc = document.querySelector("body");
console.log(doc.children);

doc.addEventListener("click", (e) => {
  if (e.target.classList.contains("section")) {
    e.target.style.backgroundColor="grey"
    e.target.nextElementSibling.style.display = "block";
    e.target.children[1].firstChild.src="assets/icons8-menos-100.png"
    e.target.classList.remove("section");
  } else {
    e.target.nextElementSibling.style.display = "none";
    e.target.children[1].firstChild.src="assets/icons8-más-100.png"
    e.target.classList.add("section");
    e.target.style.backgroundColor="#cac6c6"
  }
});
