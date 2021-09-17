// feature section
const featureLists = document.querySelectorAll(".f-list");
const simple = document.getElementsByClassName("simple")[0];
const speedy = document.getElementsByClassName("speedy")[0];
const easy = document.getElementsByClassName("easy")[0];

featureLists.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (element == featureLists[0]) {
      AddRemoveActive(element);
      simple.classList.add("feat");
      speedy.classList.remove("feat");
      speedy.classList.add("hide");
      easy.classList.remove("feat");
      easy.classList.add("hide");
    } else if (element == featureLists[1]) {
      AddRemoveActive(element);
      speedy.classList.add("feat");
      simple.classList.remove("feat");
      simple.classList.add("hide");
      easy.classList.remove("feat");
      easy.classList.add("hide");
    } else if (element == featureLists[2]) {
      AddRemoveActive(element);
      easy.classList.add("feat");
      speedy.classList.remove("feat");
      speedy.classList.add("hide");
      simple.classList.remove("feat");
      simple.classList.add("hide");
    }
  });
});

function AddRemoveActive(list, simple, speedy, easy) {
  featureLists.forEach((element) => {
    if (element == list) {
      list.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
