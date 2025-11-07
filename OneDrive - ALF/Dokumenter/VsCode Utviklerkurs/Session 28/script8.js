

        function loop() {
  
            let tall;
            let innhold = "";
           
            tall = 1;
            while (tall <= 7) {
                innhold += "Jeg er tall nummer " + tall + "<br>";
                tall++;
            }
            document.getElementById("output1").innerHTML= innhold;

        }



 