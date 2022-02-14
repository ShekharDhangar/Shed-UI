const floatBtn = document.querySelector('.float-btn')
const floatItems= document.querySelector('.floating-items');
floatBtn.addEventListener('click',()=>{
    floatItems.classList.toggle('hidden'); 
    floatBtn.removeEventListener();
})


const sliderInp = document.querySelector('.slider-inp');
const sliderValue = document.querySelector('.slider-value');
sliderInp.addEventListener('input',()=>{
    sliderValue.textContent = sliderInp.value
})

const snackbarBtn = document.querySelector('.show-snackbar')
const snackbar = document.querySelector('.snackbar');

snackbarBtn.addEventListener('click',()=>{
    snackbar.classList.add('show')
    setTimeout(()=>{
        snackbar.classList.remove('show')
    },5000)
})