// word rotation
setInterval(function () {
    const show = document.querySelector('span[data-show]');
    const next = show.nextElementSibling || document.querySelector('.show-off__mask span:first-child');
    const up = document.querySelector('span[data-up]');
    
    if (up) {
      up.removeAttribute('data-up');
    }
    
    show.removeAttribute('data-show');
    show.setAttribute('data-up', '');
    
    next.setAttribute('data-show', '');
}, 2000);

var btnUpdate = document.querySelector("#update");
var btnCancel = document.querySelector("#cancel");
var modal = document.querySelector(".modal")
btnCancel.addEventListener("click", ()=>{
  modal.classList.add('modal-close');
})

btnUpdate.addEventListener("click", ()=>{
  modal.classList.add('modal-close');
})