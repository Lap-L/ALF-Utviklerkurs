          

        function hentVerdier() {

            let date = document.getElementById("date").value;
            
            let day = date.slice(1, 2);
            let month = date.slice(3, 5);

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
                