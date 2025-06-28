const menu = document.getElementById("mobile-menu");
const menubtn= document.getElementById("menu-icon");
const menua =document.querySelectorAll(".mobile-menu a");
const animation ="animation-menu";
menubtn.addEventListener("click", () => {
 if (menu.style.display === "flex") {
    menu.style.display = "none";
    menua.forEach(link =>{link.style.display="none"});
  } 
  else {
    menu.style.display = "flex";
    menua.forEach(link =>{link.style.display="flex"});
    menu.classList.add(animation);
  }
})    