

 



function loop() {
    let sum = 0;
    let tall = 0;
    while (sum < 1238) {
        tall = tall + 1;
        sum = sum + tall;
    }
    
    document.getElementById("output1").innerHTML = "Summen er " + sum + ". " + "Siste tall lagt til var " + tall + "." ;
    return; 
}




    function loop2() {
         let sum = 0;
         let tall = 0;
         while (sum < 2250) {
             tall = tall + 2;
             sum = sum + tall;
         }
    
             document.getElementById("output2").innerHTML =
            "Summen er " + sum + ". " + "Siste tall lagt til var " + tall + "." ;
            return; 
    }


 

 
