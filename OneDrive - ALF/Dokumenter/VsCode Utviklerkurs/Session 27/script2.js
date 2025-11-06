

        function bigger() {
            let number1 = document.getElementById("number1").value;
            let number2 = document.getElementById("number2").value;
            
           

            
            if ( number1 > number2 ) {
                return document.getElementById("output1").innerHTML = "Største tallet er: " + number1;
               
            } 
             else {
                return document.getElementById("output1").innerHTML = "Største tallet er: " + number2;
            }

            
        }
