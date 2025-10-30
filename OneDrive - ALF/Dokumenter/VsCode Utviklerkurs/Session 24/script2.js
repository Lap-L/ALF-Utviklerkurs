          

        function hentVerdier() {

            let number = Number(document.getElementById("number").value);
            
            let rettTall = 42 ;     

        if ( number === rettTall ) {
                document.getElementById("output1").innerHTML = "WUHUU!! Du gjettet rett!! Tallet er " + rettTall ;
               
            } else if ( number < rettTall ) {
                document.getElementById("output1").innerHTML = "Du gjettet på <tall>. Dette er for lavt. Prøv igjen!".replace("<tall>", number) ;           
            }
             else {
                document.getElementById("output1").innerHTML = "Du gjettet på <tall>. Dette er for høyt. Prøv igjen!".replace("<tall>", number) ;
            }    
}
  
       function hentVerdier2() {

            let number = Number(document.getElementById("number2").value);
            
            let hemmeligTall = Math.floor (Math.random() * 20 ); 

            let teller = 5

            teller = teller - 1
            teller--

            teller = teller + 1
            teller++




        if ( number === hemmeligTall ) {
                document.getElementById("output2").innerHTML = "WUHUU!! Du gjettet rett!! Tallet er " + hemmeligTall ;
                document.getElementById("output2").classList.add("win");
                document.getElementById("output2").classList.remove("loss");

               
            } else if ( number < hemmeligTall ) {
                document.getElementById("output2").innerHTML = "Du gjettet på <tall>. Dette er for lavt. Prøv igjen!".replace("<tall>", number) ; 
                document.getElementById("output2").classList.add("loss");
                document.getElementById("output2").classList.remove("win");      
            }
             else {
                document.getElementById("output2").innerHTML = "Du gjettet på <tall>. Dette er for høyt. Prøv igjen!".replace("<tall>", number) ;
                document.getElementById("output2").classList.add("loss");
                document.getElementById("output2").classList.remove("win");
            }    
}