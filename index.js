let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener("scroll",function () {
    let value = window.scrollY;
    bg.style.top = value * 0.5 + "px";
    moon.style.right = value * 0.5 + "px";
    mountain.style.bottom = value * 0.15 + "px";
    road.style.top = value * 0.15 + "px";
    text.style.top = value * 1 + "px";
})