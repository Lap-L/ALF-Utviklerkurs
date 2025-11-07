

        function loop() {
  
            let textarea = document.getElementById("number1").value;
            let times = document.getElementById("number2").value;
            let result = "";
            let i;
            for (i = 0; i < times; i++) {
                result += textarea + "<br>";
            }
            document.getElementById("output1").innerHTML= result;
        }

    