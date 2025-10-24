          

        function calc() {

            let number1 = Number(document.getElementById("number1").value);
            let number2 = document.getElementById("number2").value;
            let ops = document.getElementById("ops").value;
            let calc1, calc2, calc3, calc4;
            
            calc1 = number1 + number2 ;
            calc2 = number1 - number2 ;
            calc3 = number1 * number2 ;
            calc4 = number1 / number2 ;
                 
            
                document.getElementById("output1").innerHTML = number1;
                document.getElementById("output2").innerHTML = ops;
                document.getElementById("output3").innerHTML = number2;

        if ( ops === "+" ) {
                document.getElementById("output4").innerHTML = calc1;
               
            } else if ( ops === "-" ) {
                document.getElementById("output4").innerHTML = calc2;           

            }
            else if ( ops === "*" ) {
                document.getElementById("output4").innerHTML = calc3;           

            }
             else {
                document.getElementById("output4").innerHTML = calc4;

            }
                
                
            
}
  

                