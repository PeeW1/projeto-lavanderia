document.addEventListener("DOMContentLoaded", () => {
    const menuHamburger = document.querySelector(".header-menu-hamburguer");
    const imageMh = document.querySelector(".image-mh");
    const menuDropdown = document.querySelector(".container-dropmenu")
    const menuTapete = document.querySelector(".menu-tapete")
    const menuCobertor = document.querySelector(".menu-cobertor")
    const arrowRight = document.querySelector(".img-arrow-right")
    const arrowLeft = document.querySelector(".img-arrow-left")

    const mhIcon = "./img/icons/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
    const closeIcon = "./img/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

    arrowRight.addEventListener("click", (e) => {
        if(menuCobertor.classList.contains("hidden")) {
            menuCobertor.classList.remove("hidden")
            menuTapete.classList.add('hidden')
        }else {
            menuCobertor.classList.add("hidden")
            menuTapete.classList.remove("hidden")
        }
        
    });



    menuHamburger.addEventListener('click', (e) => {

        console.log("clicou")
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
})
