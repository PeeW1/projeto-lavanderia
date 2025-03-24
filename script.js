document.addEventListener("DOMContentLoaded", () => {
    const menuHamburger = document.querySelector(".header-menu-hamburguer");
    const imageMh = document.querySelector(".image-mh");
    const menuDropdown = document.querySelector(".container-dropmenu")
    const menusCarrocel = document.querySelectorAll(".menus-carrocel")
    const menuNav = document.querySelector(".menu-nav");
    const arrowLeft = document.querySelectorAll(".img-arrow-left");
const arrowRight = document.querySelectorAll(".img-arrow-right");

    console.log(menusCarrocel.length) 

    console.log(arrowLeft, arrowRight)
    


    const mhIcon = "./img/icons/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
    const closeIcon = "./img/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

    let currentMenuIndex = 0;
    
    function showMenu(index) {
        menusCarrocel.forEach(menu => menu.classList.remove("active"))
        menusCarrocel[index].classList.add("active")  
        console.log("Menu Atual: " + index);  
    }

    arrowRight.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (currentMenuIndex < menusCarrocel.length - 1) {
                currentMenuIndex++;
            } else {
                currentMenuIndex = 0;
            }
            showMenu(currentMenuIndex);
        });
    });
    
    arrowLeft.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (currentMenuIndex > 0) {
                currentMenuIndex--;
            } else {
                currentMenuIndex = menusCarrocel.length - 1;
            }
            showMenu(currentMenuIndex);
        });
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
