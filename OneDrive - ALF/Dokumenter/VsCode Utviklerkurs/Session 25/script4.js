          
          

        function hentVerdier() {

            let height = document.getElementById("number1").value;
            
            let weight = document.getElementById("number2").value;
            
            let a, b;
            a = height*height
            b = weight / a

            document.getElementById("output1").innerHTML = height;
            document.getElementById("output2").innerHTML = weight;
            document.getElementById("output3").innerHTML = b;

            if ( b < 18.5 ) {
                document.getElementById("bmi").innerHTML = "Undervekt: BMI under 18.5";
               
            } else if ( b >= 18.5 && b <= 24.9 ) {
                document.getElementById("bmi").innerHTML = "Normal vekt: BMI 18.5–24.9";  
                
                } else if ( b >= 25 && b <= 29.9 ) {
                document.getElementById("bmi").innerHTML = "Overvekt: BMI 25–29.9";

            }
             else {
                document.getElementById("bmi").innerHTML = "Fedme: BMI 30 eller høyere";

            }    
            
            

}
  