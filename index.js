const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('click', function() {
    document.querySelector(".content_2").style.transform = "translate(0px)";
})
right.addEventListener('click', function() {
    document.querySelector(".content_2").style.transform = "translate(-638px)";
})