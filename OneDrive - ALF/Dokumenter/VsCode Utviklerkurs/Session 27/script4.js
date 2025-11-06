

        function area() {
            let number1 = document.getElementById("number1").value;
            
            
            
           
           let area = area1(number1);
              
                document.getElementById("output1").innerHTML = "Arealet av sirkelen er: " + area.toFixed(2);
            
        }

            function area1(number1) {  
            let area = number1 * number1 * 3.14;
                return area;
            }