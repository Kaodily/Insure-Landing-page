const hamburg = document.querySelector('.hamburger');
const closer = document.querySelector('.close');
const nav = document.querySelector('.navbar')
console.log(nav);
hamburg.addEventListener('click', ()=>{
    nav.classList.add('popup')
});
closer.addEventListener('click',()=>{
    nav.classList.remove('popup');
})