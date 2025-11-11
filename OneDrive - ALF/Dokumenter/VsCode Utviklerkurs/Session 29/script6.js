



        function conc() {
            let innhold = "";
            for (let a = 1; a <= 5; a++) {
                for (let b = 1; b <= 5; b++) {
                     {
                        innhold += "" + a + b + "<br>";
                    }
                }
            }
            document.getElementById('output1').innerHTML = innhold;
            
}

        