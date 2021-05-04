// const p = document.getElementById("iamp");
// console.log(p);

// p.style.color = "green";

// console.log(p.classList);
// p.classList.add("paragraph");
// console.log(p.classList);
// p.classList.remove("paragraph");
// console.log(p.classList);

// hex, 0-9 & a-f (6-length)
// [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f]

const button = document.getElementById("btn");
const hexValues = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];  // range of indexes are [0-15]
const body = document.getElementById("body");
// #3abf25

// function colorChanger(){
//     var hex = '#';

//     for(var i=0 ; i<6 ; i++){
//         const index = Math.floor(Math.random()*hexValues.length); // this line gives us the values from 0-15
//         hex = hex+hexValues[index];
//     }
//     button.innerText = hex;
//     body.style.backgroundColor = hex;
// }

// const colorChanger = function(){
//     var hex = '#';

//     for(var i=0 ; i<6 ; i++){
//         const index = Math.floor(Math.random()*hexValues.length); // this line gives us the values from 0-15
//         hex = hex+hexValues[index];
//     }
//     button.innerText = hex;
//     body.style.backgroundColor = hex;
// }

const colorChanger = () => {
    var hex = '#';

    for(var i=0 ; i<6 ; i++){
        const index = Math.floor(Math.random()*hexValues.length); // this line gives us the values from 0-15
        hex = hex+hexValues[index];
    }
    button.innerText = hex;
    body.style.backgroundColor = hex;
}
