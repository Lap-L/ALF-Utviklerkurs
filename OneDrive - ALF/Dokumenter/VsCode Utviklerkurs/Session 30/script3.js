
        
        
        function frequency() {
            
         
         const tall = [4,5,2,3,4,6,1,2,0,9,7,6,8,5,6,4,2,3,4,7,3];
         let antall = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

         let streng = ""


         for (let i = 0; i < tall.length; i++){
            antall[tall[i]]++;
         }
         for (let i = 0; i < antall.length; i++){

            streng += `<p style ="color:red"> verdi ${i} ${antall[i]} </p> <br>`

            if (i % 2 === 0){
                p.style.Color = "red"
        }

        else 
            
         
            
         
            



            document.getElementById("output1").innerHTML = streng;
            
        }
            
        

        