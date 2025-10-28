          
        function item1() {

            let output ;

            output = 1;
            output += Number( document.getElementById("output1").innerHTML ) ;
            

            let toggle1 = document.getElementById("output1");
            toggle1.classList.toggle("verified");

            
                document.getElementById("output1").innerHTML = output ;
}
  
        function item2() {

            document.getElementById("output2").classList.toggle("refused");
}

        function item3() {

            document.getElementById("output3").classList.toggle("verified");
}
        function item4() {

            document.getElementById("output4").classList.toggle("refused");
}
        function item5() {

            document.getElementById("output5").classList.toggle("verified");
}

  
