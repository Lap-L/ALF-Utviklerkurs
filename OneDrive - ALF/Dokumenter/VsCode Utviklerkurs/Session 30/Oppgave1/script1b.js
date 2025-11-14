
        
        
        function array() {
            
         let svar = "";
         let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];
         //skriv ut arrayen

        for (let i = tall.length - 1; i >= 0; i--){
            svar += tall[i] + "<br>";
        }
            document.getElementById("output1").innerHTML = svar;
            
        }

        