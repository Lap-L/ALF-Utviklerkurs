

        function loop() {
  
            let tall;
            let innhold = "";
                   
                    tall = 12;
                    while (tall <= 98) {
                        innhold += "Jeg er tall nummer " + tall + "<br>";
                        tall += 5;
                    }
            document.getElementById("output1").innerHTML= innhold;

        }

    

 