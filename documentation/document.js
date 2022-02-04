const navBar = document.querySelector('.nav-bar');
const menuIcon = document.querySelector('.menu');
const compNavContainer = document.querySelector('.component-nav')
const compNavLink = document.querySelectorAll(".simple-link") ;
menuIcon.addEventListener('click', menuHandler);
function menuHandler() {
  const navComponent = document.querySelector('.component-nav');
  navComponent.classList.toggle('open');
  menuIcon.classList.toggle('open');
}

compNavLink.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const compId = e.currentTarget.getAttribute("href").slice(1);
        const compElement = document.getElementById(compId)
        const navHeight = navBar.getBoundingClientRect().height;
        const compNavHeight= compNavContainer.getBoundingClientRect().height; 

        let position = compElement.offsetTop - navHeight; 
        window.scrollTo({
            left:0,
            top:position,
        });
        compNavContainer.classList.toggle('open')
        menuIcon.classList.toggle("open")
                 
    })
})

