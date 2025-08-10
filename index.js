




// Define variables
let c = 0;   // main counter
let ci = 0;  // increment clicks
let cd = 0;  // decrement clicks

// Get HTML elements
let count = document.getElementById("count");
let incCount = document.getElementById("intCount"); // match HTML id
let decCount = document.getElementById("decCount"); // match HTML id



function inc() {


    // Increase main counter
    if (c >= 10) {
        c = 0;  // Reset to 0 if it reaches 10
    } else {
        c = c + 1;  // Otherwise, just increase by 1
    }

    // Track how many times increment button is pressed
    if (ci >= 10) {
        ci = 0;  // Reset if reaches 10
    } else {
        ci = ci + 1;
    }

    // Update display
    update();
}


function dec() {
    if (c>0){
        c=c-1;
    }else{
        c=0;
    }

    if (cd>=10){
        cd=0;
    }else {
        cd=cd+1;
    }

    update();
}

function update() {
    // Show values in HTML
    incCount.textContent = ci;  // Show increment count
    decCount.textContent = cd;  // Show decrement count
    count.textContent = c;      // Show main counter
}