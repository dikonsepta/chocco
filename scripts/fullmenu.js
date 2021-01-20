const body = document.body;
const openBut = document.querySelector(".fullmenu__open");
const menu = document.querySelector(".fullmenu");
const closeBut = document.querySelector(".fullmenu__close");

openBut.addEventListener("click", (event) => {
    event.preventDefault();
    body.style.overflowY = "hidden";
    menu.style.display = "flex";
});

for (let links of menu.querySelectorAll("a")) {
    links.addEventListener("click", () => {
        body.style.overflowY = "visible";
        menu.style.display = "none";
    });
}

closeBut.addEventListener("click", (event) => {
    event.preventDefault();
    body.style.overflowY = "visible";
    menu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    window.onresize = () => {
        body.style.overflowY = "visible";
        menu.style.display = "none";
    };
});