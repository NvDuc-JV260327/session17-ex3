let open = document.querySelector('.openModal');
let close = document.querySelector('.close');
let container = document.querySelector('.container');
let modal = document.querySelector('.modal');
open.onclick = function() {
    modal.style.visibility = 'visible';
    container.style.backgroundColor = '#8a9ea8';
}
close.onclick = function() {
    modal.style.visibility = 'hidden';
    container.style.backgroundColor = 'white';
}
