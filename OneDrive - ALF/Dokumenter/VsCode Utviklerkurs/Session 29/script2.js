



        function oppstart() {
            let utskrift = document.getElementById("output1");
            let tall1, tall2, produkt;
            let tabell = "<table style='width:500px'>"
            for (tall1 = 1; tall1 <= 10; tall1++) {
                tabell += "<tr>";

                for (tall2 = 1; tall2 <= 10; tall2++) {
                    produkt = tall1 * tall2;
                    tabell += "<td>" + produkt + "</td>";
                }
                tabell += "</tr>";
            }
    
            utskrift.innerHTML = tabell;
            return; 
}


        function oppstart2() {
            let utskrift = document.getElementById("output2");
            let tall1, tall2, produkt;
            let tabell = "<table style='width:500px'>"
            for (tall1 = 10; tall1 <= 19; tall1++) {
                tabell += "<tr>";

                for (tall2 = 10; tall2 <= 19; tall2++) {
                    produkt = tall1 * tall2;
                    tabell += "<td>" + produkt + "</td>";
                }
                tabell += "</tr>";
            }
    
            utskrift.innerHTML = tabell;
            return; 
}


