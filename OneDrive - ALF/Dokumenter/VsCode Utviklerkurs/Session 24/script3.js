          

        function hentVerdier1() {

            let age = Number(document.getElementById("age").value);
            
            let ticket, ticket1, ticket2;
            ticket = 100
            ticket1 = 50
            ticket2 = 60
            
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
  
      function hentVerdier2() {

            let number1 = Number(document.getElementById("number1").value);
            let number2 = Number(document.getElementById("number2").value);
            let number3 = Number(document.getElementById("number3").value);
            
            let ticket, ticket1, ticket2;
            ticket = 100
            ticket1 = 50
            ticket2 = 60

            
            document.getElementById("output4").innerHTML = number1;
            document.getElementById("output5").innerHTML = number2;
            document.getElementById("output6").innerHTML = number3;
            let total = (number2 * ticket) + (number1 * ticket1) + (number3 * ticket2);
            let total1;
            total1 = total * 0.75

             if ( number1 <= 0 && number2 <= 0 && number3 <= 0 ) {
                document.getElementById("full").innerHTML = "Vennligst fyll inn alle felter";
                document.getElementById("full").classList.toggle("loss");  
                }

            else if ( document.getElementById("tur").checked ) {
                document.getElementById("output7").innerHTML = total;
                document.getElementById("full").innerHTML = "";
                document.getElementById("full").classList.remove("loss");
            }
             else {
                
                document.getElementById("output7").innerHTML = total1;
                document.getElementById("full").innerHTML = "";
                document.getElementById("full").classList.remove("loss");
                
            }  

  } 