const snackbarBtn = document.querySelector('.show-snackbar')
const snackbar = document.querySelector('.snackbar');

snackbarBtn.addEventListener('click',()=>{
    snackbar.classList.add('show')
    setTimeout(()=>{
        snackbar.classList.remove('show')
    },5000)
})