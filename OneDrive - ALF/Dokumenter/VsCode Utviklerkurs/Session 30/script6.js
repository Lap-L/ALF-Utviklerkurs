
        
        
        function array() {
       
         
         let rettTall = [25, 50, 75, 100];
         

            let number = Number(document.getElementById("input").value);
            let p = false;

            for (let i = 0; i < rettTall.length; i++) {

                if (rettTall[i] === 25 || 50 || 75 || 100) {
    
                    p = true;
    
                    break;
    }
}

        if (number === 25 || number === 50 || number === 75 || number === 100) {
                document.getElementById("output1").innerHTML = "eksisterer";
        }
             else {
                document.getElementById("output1").innerHTML = "eksisterer ikke" ;
            }    


         document.getElementById("output2").innerHTML = number;

            
        }

        

