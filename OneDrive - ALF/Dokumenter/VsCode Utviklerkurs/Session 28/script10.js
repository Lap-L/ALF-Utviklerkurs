

        function loop() {
  
            
  
            let tall;
            let innhold = "";

            let lim1 = Number(document.getElementById("number1").value);
            let lim2 = Number(document.getElementById("number2").value);
                   
                    tall = lim1;
                    while (tall <= lim2) {
                        innhold += "Jeg er tall nummer " + tall + "<br>";
                        tall ++;
                    }

            document.getElementById("output1").innerHTML= innhold;

        }
        

    
      
