



        function oppstart() {
            let utskrift = document.getElementById("output1");
            let tall1, tall2, produkt;
            let tabell = "<table style='width:500px'>"
            
            for (tall1 = 1; tall1 <= 10; tall1++) {
                tabell += "<tr>";
                

                for (tall2 = 1; tall2 <= 10; tall2++) {
                    produkt = tall1 * tall2;
                    
                    if (tall1 === tall2) {
                        tabell += "<td>***</td>";
                        continue; 
                    }
                    tabell += "<td>" + produkt + "</td>";
                }
                tabell += "</tr>";
                
            }
            
            tabell += "</table>";
            utskrift.innerHTML = tabell;
            return; 
}

        