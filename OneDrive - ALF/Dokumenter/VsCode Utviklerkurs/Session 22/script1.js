          
          

        function hentVerdier() {

            let username = document.getElementById("username").value;
            
            

            if ( username.length > 0 ) {
                document.getElementById("output1").innerHTML = "Hei, " + username ;
                document.getElementById("output1").classList.add("verified");
                document.getElementById("output1").classList.remove("refused");
            } else {
                document.getElementById("output1").innerHTML ="Vennligst skriv inn navnet ditt.";
                document.getElementById("output1").classList.add("refused");
                document.getElementById("output1").classList.remove("verified");

            }

            
                

}
  
