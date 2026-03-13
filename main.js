// Change navbar styles on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.tggle('window-scroll', window.scrollY > 0);
})