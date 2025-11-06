

        function volume() {
            let number1 = document.getElementById("number1").value;
            let number2 = document.getElementById("number2").value;
            let number3 = document.getElementById("number3").value;

              let volume = volume1(number1, number2, number3 );
                return document.getElementById("output1").innerHTML = "Volumet av esken er: " + volume;

        }

        function volume1(number1, number2, number3 ) {  
            let volume = number1 * number2 * number3;
                return volume;
            }