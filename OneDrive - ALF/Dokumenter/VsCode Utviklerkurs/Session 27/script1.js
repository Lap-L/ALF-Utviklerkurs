

        function alder() {
            let alder = document.getElementById("age").value;
            
           

            
            if ( alder >= 13 && alder <= 19 ) {
                document.getElementById("output1").innerHTML = "Du er tenåring";
               
            } else if ( alder < 13 ) {
                document.getElementById("output1").innerHTML = "Du er en unge";
            }
            else if ( alder > 19 && alder <= 66 ) {
                document.getElementById("output1").innerHTML = "Du er voksen";
            }
             else {
                document.getElementById("output1").innerHTML = "Du er pensjonist";
            }

            
        }
