

        function loop() {
  
            
  
            let tall;
            let innhold = "";

            let lim1 = Number(document.getElementById("number1").innerHTML);
            let lim2 = Number(document.getElementById("number2").innerHTML);
                   
                    tall = lim1;
                    while (tall <= lim2) {
                        innhold += "Jeg er tall nummer " + tall + "<br>";
                        tall += 5;
                    }

            document.getElementById("output1").innerHTML= innhold;

        }
        

    
      
