

        function loop() {
  
            let tall = "";
            let number1;
            for (number1 = 0; number1 <= 100; number1++) {
                let square = number1 * number1;
                tall += number1 + " * " + number1 + " = " + square + "<br>";
            }
            document.getElementById("output1").innerHTML= tall;
        }

    