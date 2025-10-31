          

        function hentVerdier() {

            let name = document.getElementById("name").value;
            

        if ( name === "H" || name === "h" ) {
                document.getElementById("output1").innerHTML = "Hjemme";
               
            } else if ( name === "U" || name === "u" ) {
                document.getElementById("output1").innerHTML = "Uavgjort";  
                
                } else if ( name === "B" || name === "b" ) {
                document.getElementById("output1").innerHTML = "Borte";

            }
             else {
                document.getElementById("output1").innerHTML = "Ugyldig tippetegn";

            }    
}
  

                