let menuMobile = document.querySelector(".menumobile");
let openMenu = document.querySelector(".burgermenuopen");
let closeMenu = document.querySelector(".burgermenuclose");

// click sul burger menu appare menu mobile
openMenu.addEventListener("click", () => {
  menuMobile.classList.add("menumobilevisibol");
  closeMenu.classList.add("visibol");
});
// click sulla x e scompare il menu mobile
closeMenu.addEventListener("click", () => {
  menuMobile.classList.remove("menumobilevisibol");
  openMenu.classList.add("vilibol");
});
