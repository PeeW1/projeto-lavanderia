const menuHamburger = document.querySelector(".header-menu-hamburguer");
const imageMh = document.querySelector(".image-mh");
const menuDropdown = document.querySelector(".container-dropmenu")

const mhIcon = "/img/icons/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
const closeIcon = "/img/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";


menuHamburger.addEventListener('click', (e) => {

    
    imageMh.style.transition = "opacity 0.5s ease";
    imageMh.style.opacity = "0";
     

    setTimeout(() => {

          if(imageMh.getAttribute("src") === mhIcon) {
        imageMh.setAttribute("src", closeIcon)
    } else {
        imageMh.setAttribute("src", mhIcon)
    }
      
        setTimeout(() => {
            imageMh.style.opacity = "1";
        }, 300);
    }, 100);

    menuDropdown.classList.toggle('hidden')
    document.body.classList.toggle('no-overflow')

});

