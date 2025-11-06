

        function area() {
            let number1 = document.getElementById("number1").value;
            let number2 = document.getElementById("number2").value;
            
           let area = area1(number1, number2);
           document.getElementById("output1").innerHTML = "Arealet er: " + area;
            
        }

         function area1(number1, number2) {
            area = number1 * number2;
            return area;
            
        }
