// mobile navigation
const mobileNav = document.getElementsByClassName("mobile")[0];
const ham = document.getElementsByClassName("ham")[0];
const mClose = document.getElementsByClassName("close")[0];
const blackLogo = document.getElementsByClassName("black")[0];
const copyLogo = document.getElementsByClassName("copy")[0];
const navigation = document.getElementsByClassName("navigation")[0];

// mobile navigation
mobileNav.addEventListener("click", (e) => {
  e.preventDefault();
  ham.classList.toggle("hide");
  mClose.classList.toggle("hide");
  blackLogo.classList.toggle("hide");
  copyLogo.classList.toggle("hide");
  if (navigation.style.display == "flex") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "flex";
  }
});
