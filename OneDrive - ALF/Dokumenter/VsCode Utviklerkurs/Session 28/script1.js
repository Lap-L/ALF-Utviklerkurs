

        function loop() {
  
            let partall = "";
            let number1;
            for (number1 = 0; number1 <= 100; number1++) {
                if (number1 % 2 === 0) {
                    partall += number1 + "<br>";
                }
            
    

            document.getElementById("output1").innerHTML= partall;
        }

    }