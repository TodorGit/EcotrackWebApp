export function toggle(){
    const ourServ = document.querySelectorAll(".borders");


    ourServ.forEach((services) =>{
        services.addEventListener("click", () => {
            services.classList.toggle("active");
        });
    });
} 



let subMenu = document.getElementById('subMenu')

export function toggleMenu(){

    console.log(subMenu)
    subMenu.classList.toggle("open-menu")


}


