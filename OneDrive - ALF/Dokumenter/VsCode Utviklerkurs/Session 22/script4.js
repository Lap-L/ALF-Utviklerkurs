          

        function hentVerdier() {

            let myRange = document.getElementById("myRange").value;
        

            document.getElementById("output1").innerHTML = myRange;

        if ( 0 > myRange < 80 ) {
                document.body.style.backgroundColor = "red";
               
            } else if ( 80 > myRange < 160 ) {
                document.body.style.backgroundColor = "green";          
            }
            
             else {
                document.body.style.backgroundColor = "blue";
            }  
}
  

            

                