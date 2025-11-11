


    function loop() {
            let sum = 0;
            let number1;
            let number2;
            number1 = Number(document.getElementById("tall1").value);
            number2 = Number(document.getElementById("tall2").value);
            for (let i = number1; i <= number2; i++) {
                if (i % 2 === 0) {
                    sum += i;
                }
            }
            document.getElementById("output1").innerHTML = "Summen av partall mellom " + number1 + " og " + number2 + " er: " + sum;
    }

       
        
 

 
