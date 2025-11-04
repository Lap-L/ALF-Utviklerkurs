          

        function calc() {

            let number1 = Number(document.getElementById("number1").value);
            let number2 = Number(document.getElementById("number2").value);
            let ops = document.getElementById("ops").value;
            let calc1, calc2, calc3, calc4;
            
            calc1 = number1 + number2 ;
            calc2 = number1 - number2 ;
            calc3 = number1 * number2 ;
            calc4 = number1 / number2 ;
                 
            
                `document.getElementById("output1").innerHTML = number1;
                document.getElementById("output2").innerHTML = ops;
                document.getElementById("output3").innerHTML = number2;`

            let ny01 = document.createElement("div");
            ny01.setAttribute("id", "min01");
            document.getElementById("output1").appendChild(ny01);
            
            
            

        if ( ops === "+" ) {
                let nyli1 = document.createElement("p");
                nyli1.innerHTML = calc1;
                ny01.appendChild(nyli1);
               
            } else if ( ops === "-" ) {
                let nyli1 = document.createElement("p");
                nyli1.innerHTML = calc2;
                ny01.appendChild(nyli1);
            }
            else if ( ops === "*" ) {
                let nyli1 = document.createElement("p");
                nyli1.innerHTML = calc3;
                ny01.appendChild(nyli1);
            }
             else {
                let nyli1 = document.createElement("p");
                nyli1.innerHTML = calc4;
                ny01.appendChild(nyli1);
            }
                
                
            
}
  

                