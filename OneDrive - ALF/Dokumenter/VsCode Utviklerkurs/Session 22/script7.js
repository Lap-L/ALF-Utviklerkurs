          

        function calc() {

            let number1 = document.getElementById("number1").value;
            let number2 = document.getElementById("number2").value;


            let calc1, snitt;
            calc1 = Number(number1) * Number(number2);
            
            document.getElementById("output1").innerHTML = number1;
            document.getElementById("output3").innerHTML = calc1;
        
        if ( number2 >= 0 ) {
                document.getElementById("output2").innerHTML = number2;
            }
                else {
                document.getElementById("output2").innerHTML = "Ygyldig verdi"; 
                  
}
        
  

}