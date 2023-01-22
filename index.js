//슬라이드 쇼
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('click', function() {
    document.querySelector(".content_2").style.transform = "translate(0px)";
})
right.addEventListener('click', function() {
    document.querySelector(".content_2").style.transform = "translate(-638px)";
})

const hambuger = document.querySelector(".hambuger");
const nav = document.querySelector(".nav")
const header = document.querySelector(".header")

hambuger.addEventListener("click",()=>{
    nav.classList.toggle("active");
    header.classList.toggle("active");
})
