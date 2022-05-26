let menuMobile = document.querySelector(".menumobile");
let openMenu = document.querySelector(".burgermenuopen");
let closeMenu = document.querySelector(".burgermenuclose");

// click sul burger menu appare menu mobile
function toggleMenu() {
  menuMobile.classList.add("menumobilevisibol");
  openMenu.classList.add("none");
  closeMenu.classList.add("visibol");
}
// click sulla x e scompare il menu mobile
function close() {
  menuMobile.classList.remove("menumobilevisibol");
  closeMenu.classList.remove("visibol");
  openMenu.classList.remove("none");
}
openMenu.addEventListener(`click`, toggleMenu);
closeMenu.addEventListener(`click`, close);
