

        function initial() {
            let name1 = document.getElementById("name1").value;
            let name2 = document.getElementById("name2").value;
            let name3 = document.getElementById("name3").value;

                let initial = initial1(name1, name2, name3 );
                document.getElementById("output1").innerHTML = "Initialene dine er: " + initial;
        }

         function initial1(name1, name2, name3 ) {  
            let initial = name1.charAt(0) + ". " + name2.charAt(0) + ". " + name3;
                return initial;
            }