          

        function hentVerdier() {

            let name = document.getElementById("name").value;
            
            

            switch (name) {
                case 'H':
                case 'h':
                    document.getElementById("output1").innerHTML = "Hjemme";
                    break;
                case 'U':
                case 'u':
                    document.getElementById("output1").innerHTML = "Uavgjort";
                    break;
                case 'B':
                case 'b':
                    document.getElementById("output1").innerHTML = "Borte";
                    break;
                default:
                    document.getElementById("output1").innerHTML = "Ugyldig tippetegn";
            }
        }
                