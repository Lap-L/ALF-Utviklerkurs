          

        function calc() {

            let number1 = document.getElementById("number1").value;
            let number2 = document.getElementById("number2").value;
            let number3 = document.getElementById("number3").value;
            let number4 = document.getElementById("number4").value;
            let number5 = document.getElementById("number5").value;

            let calc1, snitt;
            calc1 = Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5);
            snitt = calc1 / 5 ;
            document.getElementById("output1").innerHTML = snitt;
        
        if ( snitt >= 5.5 ) {
                document.getElementById("output2").innerHTML = "A";
               
            } else if ( snitt >= 4.5 ) {
                document.getElementById("output2").innerHTML = "B";           

            }
            else if ( snitt >= 3.5 ) {
                document.getElementById("output2").innerHTML = "C";           

            }
             else if ( snitt >= 2.5 ) {
                document.getElementById("output2").innerHTML = "D";           

            }
                else {
                document.getElementById("output2").innerHTML = "F"; 
                  
}
        
  

}