const menuIcon = document.querySelector('.menu-btn');
menuIcon.addEventListener('click', menuHandler);
const sideBar = document.querySelector('.side-overlay');
function menuHandler() {
    console.log('clcikd')
    sideBar.classList.add('open');
    menuIcon.classList.remove('open');
}

const closeIcon = document.querySelector(".close-sidebar")
closeIcon.addEventListener('click',()=>{
    sideBar.classList.remove('open')
});

function closeSideBar(e){
    if(e.currentTarget==e.target){
        sideBar.classList.remove('open')
    }
}

sideBar.addEventListener('click',closeSideBar)
function handleClickOutside(e){
    if(e.currentTarget===e.target){
        closeModal();
    }
}