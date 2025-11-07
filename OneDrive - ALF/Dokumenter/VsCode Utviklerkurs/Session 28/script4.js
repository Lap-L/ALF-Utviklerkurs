

        function loop() {
  
            let tall5 = "";
            let number1;
            for (number1 = 0; number1 <= 100; number1++) {
                if (number1 % 5 === 0 && number1 % 2 === 0) {
                    tall5 += number1 + "<br>";
                }
            
    

            document.getElementById("output1").innerHTML= tall5;
        }

    }