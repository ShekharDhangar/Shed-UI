const floatBtn = document.querySelector('.float-btn')
const floatItems= document.querySelector('.floating-items');
floatBtn.addEventListener('click',()=>{
    floatItems.classList.toggle('hidden'); 
    floatBtn.removeEventListener();
})
