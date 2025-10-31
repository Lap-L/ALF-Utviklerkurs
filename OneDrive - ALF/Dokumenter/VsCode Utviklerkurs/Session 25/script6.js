          
          

        function hentVerdier() {

            let tall = document.getElementById("tall").value;
            
            
            

            document.getElementById("output1").innerHTML = tall;

            if (tall.length <= 0 ) {
                document.getElementById("output2").innerHTML = "Vennligst skriv inn et årstall.";

                } else if (tall % 4 == 0 && (tall % 100 != 0 || tall % 400 == 0)) {
                    document.getElementById("output2").innerHTML = "dette er et skuddår";
               
            } 
             else {
                document.getElementById("output2").innerHTML = "dette er ikke et skuddår";

            }    
            
            

}
  