



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

        