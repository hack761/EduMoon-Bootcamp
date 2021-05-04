// function change(){
//     const pTag = document.getElementById('hey');
//     console.log(pTag);
//     pTag.innerText = "Hello World";
// }

// function add(){
//     const pTag = document.getElementById('hey');
//     console.log(pTag);
//     pTag.innerText = "Hello Participants";
// }

var isOn = false;
function turnOnorOff(){
    
    const image = document.getElementById('bulb');
    
    if(isOn){
        image.src="/pic_bulboff.gif";
        isOn = false; // bulb is off
    } else {
        image.src = "/pic_bulbon.gif";
        isOn = true; //bulb is on
    }
    
}


// var result ;

// if(false){
//     result = "10 is not equal to 5";
// } else {
//     result = "10 is not less than 5";
// }

// console.log(result);