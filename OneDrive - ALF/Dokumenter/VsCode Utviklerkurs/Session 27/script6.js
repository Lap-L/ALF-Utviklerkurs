

        function surface() {
            let number1 = document.getElementById("number1").value;
            let number2 = document.getElementById("number2").value;
            let number3 = document.getElementById("number3").value;

                let surface = surface1(number1, number2, number3 ); 
                return document.getElementById("output1").innerHTML = "Overflaten av esken er: " + surface;
             
        }

         function surface1(number1, number2, number3 ) {  
            let surface = 2 * (number1 * number2 + number2 * number3 + number3 * number1);
                return surface;
            }