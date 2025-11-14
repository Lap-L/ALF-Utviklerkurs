
        
        
        function array() {
            
         let svar = 0;
         const tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12];
         //skriv ut arrayen

         for (let i = 0; i < tall.length; i++){
            
            svar += tall[i];
        }

        let svar2 = "";
            for (let i = 0; i < tall.length; i++){
        if (tall[i] < 0) {
            svar2 += tall[i] + "<br>";
            }

            svar3 = svar / tall.length;

            svar4 = findSmallest(tall);

            svar5 = sumpartall(tall);


            document.getElementById("output1").innerHTML = svar;
            document.getElementById("output2").innerHTML = svar2;
            document.getElementById("output3").innerHTML = svar3;
            document.getElementById("output4").innerHTML = svar4;
            document.getElementById("output5").innerHTML = svar5;
            
        }

        }

 
        function sumpartall(tall) {
            let sum = 0;
            for (let i = 0; i < tall.length; i++) {
                if (tall[i] % 2 === 0) {
                    sum += tall[i];
                }
            return sum;
        }}

        function findSmallest(tall) {
            let smallest = tall[0];
            for (let i = 1; i < tall.length; i++) {
                if (tall[i] < smallest) {
                    smallest = tall[i];
                }
            }
            return smallest;
        }