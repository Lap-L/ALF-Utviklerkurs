

        function hentVerdier() {

            
            let input = document.getElementById("beskrivelse").value;

            
            let ny01 = document.createElement("div");
            ny01.setAttribute("id", "min01");
            ny01.style.backgroundColor = input;
            document.getElementById("output1").appendChild(ny01);
            

            let nyli1 = document.createElement("p");
            nyli1.innerHTML = input ;
            ny01.appendChild(nyli1);
            
        }
