
        
        
        function regle() {
            
         let tall = Number(document.getElementById('antall').value);
         let innhold = "";
            while (tall >= 1) {
                innhold = innhold + tall + " green bottles, hanging on a wall," + "<br>";
                innhold = innhold + tall + " green bottles, hanging on a wall," + "<br>";
                innhold = innhold + "If 1 green bottle were to accidentally fall" + "<br>";
                innhold = innhold + "There'd be " + (tall - 1) + " green bottles, hanging on the wall" + "<br><br>";
                tall = tall - 1;

                if (tall === 1) {
                    innhold = innhold + tall + " green bottle, hanging on a wall," + "<br>";
                    innhold = innhold + tall + " green bottle, hanging on a wall," + "<br>";
                    innhold = innhold + "If 1 green bottle were to accidentally fall" + "<br>";
                    innhold = innhold + "There'd be no more green bottles, hanging on the wall" + "<br><br>";
                    tall = tall - 1;
                    }
            }
            document.getElementById('output1').innerHTML = innhold;
            return;
        }


