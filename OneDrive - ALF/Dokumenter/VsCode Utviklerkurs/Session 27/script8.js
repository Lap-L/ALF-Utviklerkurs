

        function convert() {
            let number1 = document.getElementById("number1").value;

                final = convert1(number1);


                return document.getElementById("output1").innerHTML = "Prisen i NOK er: " + final;
        }

         function convert1(number1) {  
            let convert = number1 * 10 ;
                gebyr = convert + 249;
                moms = 0.25 * gebyr;
                final = gebyr + moms;
                return final;
            }

            