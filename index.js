





let c = 0;  
let ci = 0;
let cd = 0;

let count = document.getElementById("count");
let incCount = document.getElementById("intCount"); 
let decCount = document.getElementById("decCount");


function inc() {



    if (c >= 10) {
        c = 0;  
    } else {
        c = c + 1;
    }

    if (ci >= 10) {
        ci = 0;  
    } else {
        ci = ci + 1;
    }

    
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
    
    incCount.textContent = ci;  
    decCount.textContent = cd;  
    count.textContent = c;      
}
