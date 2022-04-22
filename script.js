const background = document.querySelector(".body-background");
const sidebarDiv = document.querySelector(".sidebar");
const ulMenu = document.querySelector(".ul-menu");
const hamburgerIcon = document.querySelector(".hamburgerIcon");


const homeBackground = document.querySelector(".home");
const purpleBackground = document.querySelector(".purple");
const orangeBackground = document.querySelector(".orange");
const greenBackground = document.querySelector(".green");
const blueBackground = document.querySelector(".blue");
const textBackground = document.querySelector(".text-background");


hamburgerIcon.addEventListener("mouseover", function() {
    ulMenu.classList.toggle("visible");

})

homeBackground.addEventListener("click", function (){
    background.className = "home";
    ulMenu.classList.remove("visible");
    textBackground.innerHTML = "Homepage";
});

purpleBackground.addEventListener("click", function (){
    background.className = "purple";
    ulMenu.classList.remove("visible");
    textBackground.innerHTML = "Purple Background";
});


blueBackground.addEventListener("click", function (){
    background.className = "blue";
    ulMenu.classList.remove("visible");
    textBackground.innerHTML = "Blue Background";
});


orangeBackground.addEventListener("click", function (){
    background.className = "orange";
    ulMenu.classList.remove("visible");
    textBackground.innerHTML = "Orange Background";
});

greenBackground.addEventListener("click", function (){
    background.className = "green";
    ulMenu.classList.remove("visible");
    textBackground.innerHTML = "Green Background";
});
 console.log("practice git");
 console.log("this is the change I've made to see what it does");