          
          

        function hentVerdier() {

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let correct1, correct2;
            correct1 = "JohnSnow";
            correct2 = 123;

            if ( username == correct1 && password == correct2 ) {
                document.getElementById("output1").innerHTML = "Velkommen! Du er logget inn som " + username ;
                document.getElementById("output1").classList.add("verified");
                document.getElementById("output1").classList.remove("refused");
            } else {
                document.getElementById("output1").innerHTML ="Brukernavn eller passord var feil!";
                document.getElementById("output1").classList.add("refused");
                document.getElementById("output1").classList.remove("verified");

            }

            
                

}
  
