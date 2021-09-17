const arrows = document.querySelectorAll(".arrow");
const para = document.querySelectorAll(".para");
const navi = document.querySelectorAll(".navi");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.preventDefault();
    ShowHide(arrow);
  });
});

function ShowHide(arrow) {
  for (let i = 0; i < arrows.length; i++) {
    if (arrow == arrows[i]) {
      para[i].classList.toggle("hide");
      if (navi[i].style.borderBottom == "medium none") {
        navi[i].style.borderBottom = "1px solid rgba(212, 204, 204, 0.76)";
      } else {
        navi[i].style.borderBottom = "none";
      }
    }
  }
}
