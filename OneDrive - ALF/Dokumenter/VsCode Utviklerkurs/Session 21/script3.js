          

        function hentVerdier1() {

            let age = Number(document.getElementById("age").value);
            
            let ticket, ticket1, ticket2;
            ticket = 100
            ticket1 = 50
            ticket2 = 80
            

            if ( age < 12 ) {
                document.getElementById("output1").innerHTML = "Du er " + age + " år gammel barn og får 50% rabatt.";
                document.getElementById("output2").innerHTML = ticket1;
                document.getElementById("output3").innerHTML = age ;
            } else if ( age > 67 ) {
                document.getElementById("output1").innerHTML = "Du er " + age + " år gammel pensjonist og får 20% rabatt.";
                document.getElementById("output2").innerHTML = ticket2;
                document.getElementById("output3").innerHTML = age ;

            }
             else {
                document.getElementById("output1").innerHTML = "Du er " + age + " år gammel voksen og får ikke rabatt.";
                document.getElementById("output2").innerHTML = ticket;
                document.getElementById("output3").innerHTML = age ;

            }
            
}
  
