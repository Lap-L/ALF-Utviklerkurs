



    function loop() {
        let tall1 = parseInt(document.getElementById("tall1").value);
        let tall2 = parseInt(document.getElementById("tall2").value);
        let sum = 0;
        for (let i = tall1; i <= tall2; i++) {
            let erPrimtall = true;
            if (i <= 1) {
                erPrimtall = false;
            }
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    erPrimtall = false;
                    break;
                }
            }
            if (erPrimtall) {
                sum += i;
            }
        }
        document.getElementById("output1").innerHTML = "Summen av primtall mellom " + tall1 + " og " + tall2 + " er: " + sum;
    }

       

        
 

 
