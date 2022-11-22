const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector('#sideMenu');
const voidElement = document.getElementById('void');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
  if (!menuOpen){
    sideMenu.classList.add('open');
    menuOpen = true;
  } else {
    sideMenu.classList.remove('open');
    menuOpen = false;
  }
})
document.addEventListener('keydown', (event) => {
  if (menuOpen && event.key == "Escape"){
    sideMenu.classList.remove('open');
    menuOpen = false;
  }
})
voidElement.addEventListener('click',() => {
  if (menuOpen){
    sideMenu.classList.remove('open');
    menuOpen = false;
  }
})


console.log("Hellow Honest");