



        function oppstart() {
            
            let utskrift = document.getElementById("output1");
            let innhold = "";
            let rad = 10;
            while (rad >= 1) {
                let linje = "";
                let tall = 1;
                while (tall <= rad) {
                    linje = linje + tall + " ";
                    tall = tall + 1;
                }
                innhold = innhold + linje + "<br>";
                rad = rad - 1;
            }
            utskrift.innerHTML = innhold;
            return;
}

        
        function oppstart2 () {
            let utskrift = document.getElementById("output");
            resultat = "";
            let teller = 10; // har kontroll på vor mange tall som skal skrives ut på hver linje

            for (num=1; num <= 10; num++){ // flytter til neste linje 
                for (i=1; i <= teller; i++){ // skriver ut hver enkelt linje
                    resultat += i + " ";
                }
                resultat += "<br>";
                teller--; // Begynner på 10 (første linje) og reduseres med 1 for hver linje       
            }
            utskrift.innerHTML = resultat;
        }
    