

        function hentVerdier() {

            
            let input = document.getElementById("beskrivelse").value;

            let ny01 = document.createElement("div");
            ny01.setAttribute("id", "min01");
            document.getElementById("output1").appendChild(ny01);

            let nyli1 = document.createElement("p");
            nyli1.innerText = input;
            document.getElementById("min01").appendChild(nyli1);

            
        }
