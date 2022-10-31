
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// var nav = document.querySelector('nav'); // Identify target
// window.addEventListener('scroll', function(event) { // To listen for event
//     event.preventDefault();

//     if (window.scrollX <= 150) { // Just an example
//         console.log(nav,"hhhhhhhhhhhhh")

//         nav.style.backgroundColor = '#000'; // or default color
//     } else {
//         nav.style.backgroundColor = 'transparent';
//     }
// });

const navbar1 = document.querySelector("#nav1");
const navbar2 = document.querySelector("#nav2");
const navbars = document.querySelector("nav")


window.onscroll = function () {
    console.log("KKKKKKKKKKKKKK")
    show.innerHTML = document.documentElement.scrollRight|| document.body.scrollRight;
};
