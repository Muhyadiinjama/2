const SideMenu = document.querySelector('#SideMenu');

function openMenu(){
    SideMenu.style.transform = 'translateX(-16rem)'; 
}
function closeMenu(){
    SideMenu.style.transform = 'translateX(16rem)'; 
}

