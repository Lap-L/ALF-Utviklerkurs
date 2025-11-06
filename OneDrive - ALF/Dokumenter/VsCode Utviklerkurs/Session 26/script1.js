

        function hentVerdier() {

            
            variable1 = Math.floor (Math.random() * 6 + 1);
            variable2 = Math.floor (Math.random() * 6 + 1);
            variable3 = Math.floor (Math.random() * 6 + 1);

            let ny01 = document.createElement("ul");
            ny01.setAttribute("id", "min01");
            document.getElementById("output1").appendChild(ny01);

            let nyli1 = document.createElement("li");
            nyli1.innerText = variable1;
            document.getElementById("min01").appendChild(nyli1);

            
        }
