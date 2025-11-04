          

        function hentVerdier() {

            let date = document.getElementById("date").value;
            
            let day = date.slice(1, 2);
            let month = date.slice(3, 5);

            let x = 10;
            let y = 20;
            let input = "x * y";
            let result = eval(text);

document.getElementById("demo").innerHTML = result;

            document.getElementById("output1").innerHTML = day +".";

            switch (month) {
                case '01':
                    document.getElementById("output2").innerHTML = "Januar";
                    break;
                case '02':
                    document.getElementById("output2").innerHTML = "Februar";
                    break;
                case '03':
                    document.getElementById("output2").innerHTML = "Mars";
                    break;
                case '04':
                    document.getElementById("output2").innerHTML = "April";
                    break;
                case '05':
                    document.getElementById("output2").innerHTML = "Mai";
                    break;
                case '06':
                    document.getElementById("output2").innerHTML = "Juni";
                    break;
                case '07':
                    document.getElementById("output2").innerHTML = "Juli";
                    break;
                case '08':
                    document.getElementById("output2").innerHTML = "August";
                    break;
                case '09':
                    document.getElementById("output2").innerHTML = "September";
                    break;
                case '10':
                    document.getElementById("output2").innerHTML = "Oktober";
                    break;
                case '11':
                    document.getElementById("output2").innerHTML = "November";
                    break;
                case '12':
                    document.getElementById("output2").innerHTML = "Desember";
                    break;
                default:
                    document.getElementById("output2").innerHTML = "Ugyldig datoformat";
            }
        }
        
        // --- Simple calculator helpers ---
        function press(ch) {
            var d = document.getElementById('display');
            if (!d) return;
            d.value = d.value + ch;
        }

        function clearDisplay() {
            var d = document.getElementById('display');
            if (!d) return;
            d.value = '';
        }

        function calculate() {
            var d = document.getElementById('display');
            if (!d) return;
            var expr = d.value;
            // Basic safety: disallow letters to avoid unexpected eval execution
            if (/[a-zA-Z]/.test(expr)) {
                d.value = 'Error';
                return;
            }

            try {
                // Use eval to compute the result (as requested). Replace comma with point if present.
                expr = expr.replace(/,/g, '.');
                var result = eval(expr);
                d.value = String(result);
            } catch (e) {
                d.value = 'Error';
            }
        }
                