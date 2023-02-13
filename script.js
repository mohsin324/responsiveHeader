const ham = document.querySelector('#header .nav-bar .nav-list .hamburger');
const nav = document.querySelector('#header .nav-bar .nav-list nav ul');

ham.addEventListener('click', ()=> {
    nav.classList.toggle('active');
    ham.classList.toggle('active');

})