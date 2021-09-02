const btn_menu = document.querySelector('.btn-menu');
const menu_portafolio = document.querySelector('.portafolio');
const menu_habilidades = document.querySelector('.bg-habilidades');
const menu_about = document.querySelector('.bg-sobre-mi');
const menu_contacto = document.querySelector('.bg-contacto');

eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded', () => {
        if(btn_menu){
            btn_menu.addEventListener('click', () => {
                const menu_items = document.querySelector('.menu-items');
                menu_items.classList.toggle('mostrar');
            })
        }
    })

    window.addEventListener('scroll', AgregarActive)
}
// Agregar la clase Active
function AgregarActive(e) {
    const ubic_portafolio = menu_portafolio.getBoundingClientRect();
    const ubic_habilidades = menu_habilidades.getBoundingClientRect();
    const ubic_about = menu_about.getBoundingClientRect();
    const ubic_contacto = menu_contacto.getBoundingClientRect();

    if (ubic_portafolio < 250){
        console.log('oliiii');
    } else if (ubic_habilidades.top < 20){
        console.log('Habilidades');
    } else if (ubic_about.top < -100){
        console.log('Sobre Mi')
    } else if (ubic_contacto.top < -200){
        console.log('Contacto')
    }
}