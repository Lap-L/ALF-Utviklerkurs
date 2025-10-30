          

        function history() {

            let date = Number(document.getElementById("date").value);
            let name = document.getElementById("name").value;
            let gender = document.getElementById("gender").value;
            let calc1, calc2;
            
            calc1 = 2025 - date ;
            calc2 = 100 - calc1 ;
            
                 
            
                
                document.getElementById("output2").innerHTML = name;
                document.getElementById("output3").innerHTML = date;
                document.getElementById("output4").innerHTML = calc1;
                document.getElementById("output5").innerHTML = calc2;

        if ( gender === "mann" ) {
                document.getElementById("output1").innerHTML = "mann";
               
            } else if ( gender === "kvinne" ) {
                document.getElementById("output1").innerHTML = "kvinne";           

            }
             else {
                document.getElementById("output1").innerHTML = "x";

            }    
}
  

                