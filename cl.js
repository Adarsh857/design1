const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const clickButton = document.getElementsByClassName("click");

const cclick = document.getElementById("cclick");
const cclick1 = document.getElementById("cclick1");
const cclick2 = document.getElementById("cclick2");
box1.addEventListener("mouseover",(e)=>{
    cclick.style.setProperty('color',"white");
    cclick.style.setProperty('visibility',"visible");
    e.preventDefault();
})

box1.addEventListener("mouseout",(e)=>{
 
    cclick.style.setProperty('visibility',"hidden");
    e.preventDefault();
})
box2.addEventListener("mouseover",(e)=>{
    cclick1.style.setProperty('color',"white");
    cclick1.style.setProperty('visibility',"visible");
    e.preventDefault();
})

box2.addEventListener("mouseout",(e)=>{
 
    cclick1.style.setProperty('visibility',"hidden");
    e.preventDefault();
})
box3.addEventListener("mouseover",(e)=>{
    cclick2.style.setProperty('color',"white");
    cclick2.style.setProperty('visibility',"visible");
    e.preventDefault();
})

box3.addEventListener("mouseout",(e)=>{
 
    cclick2.style.setProperty('visibility',"hidden");
    e.preventDefault();
})
console.log(cclick2);