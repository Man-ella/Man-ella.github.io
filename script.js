const techButton = document.getElementById("tech")
const navList = document.getElementById("nav-list")

function toggleButton(){
  navList.classList.toggle("show")
}

techButton.addEventListener("click",toggleButton)
