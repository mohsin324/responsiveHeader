// Getting DOM element
const icon = document.querySelector('.icon');
const header = document.querySelector('.header');

function addClass(){
    // navBar.setAttribute('class', 'active');
    // header.setAttribute('class', 'active');
    header.classList.toggle('active')

}
icon.addEventListener('click', addClass);

