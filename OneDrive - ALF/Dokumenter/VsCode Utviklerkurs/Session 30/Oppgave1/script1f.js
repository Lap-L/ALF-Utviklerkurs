
        
        
        function array() {
            
         let svar = 0;
         let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];
         //skriv ut arrayen

         for (let i = 0; i < tall.length; i++){
            
            svar += tall[i];
        }

        

            document.getElementById("output1").innerHTML = svar;
            
        }

    