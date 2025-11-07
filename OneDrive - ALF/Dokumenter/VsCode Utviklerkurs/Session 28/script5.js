

        function loop() {
  
            let tall5 = "";
            let number1;
            for (number1 = 0; number1 <= 100; number1++) {
                if (number1 % 8 === 0 || number1 % 3 === 0) {
                    tall5 += number1 + "<br>";
                }
            
    

            document.getElementById("output1").innerHTML= tall5;
        }

    }