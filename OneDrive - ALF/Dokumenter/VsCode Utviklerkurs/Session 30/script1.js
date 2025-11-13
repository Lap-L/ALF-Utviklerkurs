
        
        
        function prime() {
            
         let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12];
         //skriv ut arrayen
         
         let innhold = "";
            let erPrimtall = true;
            
            if (tall <= 1) {
                erPrimtall = false;
            }
            for (let i = 2; i <= Math.sqrt(tall); i++) {
                if (tall % i === 0) {
                    erPrimtall = false;
                    break;
                }
            }
            
            if (erPrimtall) {
                innhold = tall + " er et primtall.";
            } else {
                innhold = tall + " er ikke et primtall.";
            }
            document.getElementById('output1').innerHTML = innhold;
            return;
        }


