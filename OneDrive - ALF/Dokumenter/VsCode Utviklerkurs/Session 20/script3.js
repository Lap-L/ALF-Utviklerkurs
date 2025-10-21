          
          

        function hentVerdier() {

            let number1 = document.getElementById("number1").value;
            let a, b, c;
            a = number1 - 32
            b = a / 1.8
            c = b + 273
            
            let number2 = document.getElementById("number2").value;
            let d, e, f, g;
            d = number2 *1.8
            e = d + 32
            f = d / 1.8
            g = f + 273



            document.getElementById("output1").innerHTML = b;
            document.getElementById("output2").innerHTML = c ;
            document.getElementById("output3").innerHTML = e;
            document.getElementById("output4").innerHTML = g;
                

}
  
