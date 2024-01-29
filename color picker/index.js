
console.log("it's color picker");

// const container = document.querySelectorAll(".container");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

const boxes = document.querySelector(".box");


box1.addEventListener("click", (evt) => {
    document.body.style.backgroundColor = "blue";
});

box2.addEventListener("click", (evt) => {
    document.body.style.backgroundColor = "yellow";
});

box3.addEventListener("click", (evt) => {
    document.body.style.backgroundColor = "green";
});

box4.addEventListener("click", (evt) => {
    document.body.style.backgroundColor = "red";
});

