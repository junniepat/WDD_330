//get id for div in html and set variables
const squareElement = document.getElementById("square");
let angle = 0;
const id = requestAnimationFrame(rotate);

cancelAnimationFrame(id);
// sets the interval for the animation
// setInterval( () => {
//     angle = (angle + 2) % 360;
//     console.log(squareElement);
//     squareElement.style.transform = `rotate(${angle}deg)`;
// }, 1000/60);

function rotate() {
    angle = (angle + 2) % 360;
    console.log("in rotate");
    squareElement.style.transform  = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}





