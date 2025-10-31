 function hentVerdier1() {
    

             if ( document.getElementById("big").checked) {
                document.getElementById("output1").innerHTML = "Stor";
                }

             else {
                
                document.getElementById("output1").innerHTML = "Liten";
                
            }  

            if ( document.getElementById("chicken").checked) {
                document.getElementById("output2").innerHTML = "Kylling";
                }   
                else if ( document.getElementById("vegetarian").checked) {  
                document.getElementById("output2").innerHTML = "Vegetar";
                }
                else {
                document.getElementById("output2").innerHTML = "Taco";
                }

                
                if ( document.getElementById("one").checked) {
                    document.getElementById("output3").innerHTML = "one";
                }
                else {
                    document.getElementById("output3").innerHTML = "two";
                }

}