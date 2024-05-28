



// let heading = document.querySelector('');


// heading.addEventListener('click', function () {
//     heading.style.cssText = " color:blue"
// })



let box = document.querySelector('.box');

let heading = document.createElement("h1");



heading.textContent = " this text is added with js";


box.appendChild(heading)

heading.addEventListener('mouseover', () => {
    heading.style.cssText = " color:red ; background-color:black ;font-size:100px"
})









