



        function conc() {
            let innhold = "";
            for (let a = 1; a <= 5; a++) {
                for (let b = 1; b <= 5; b++) {
                    for (let c = 1; c <= 5; c++) {
                        innhold += "" + a + b + c + "<br>";
                    }
                }
            }
            document.getElementById('output1').innerHTML = innhold;
            
}

        