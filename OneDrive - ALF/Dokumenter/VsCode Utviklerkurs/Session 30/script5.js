
        
        
        function array() {
       
         
         let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
         let month = months[Number(document.getElementById("input").value)-1];
         document.getElementById("output1").innerHTML = month;

         
         let day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
         
         
         

        

         
document.getElementById("output2").innerHTML = day[Number(document.getElementById("input").value)-1];

            
        }

        

