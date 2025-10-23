          

        function hentVerdier1() {

            let name1 = document.getElementById("name1").value;
            let name2 = document.getElementById("name2").value;
            let name3 = document.getElementById("name3").value;
            let a, b, c, n1, n3;
            n1 = name1.substr(0, 3);
            n3 = name3.substr(0, 2);
            a = n1 + "." + name2[0] + "." + name3 
            b = a + "@Alf.no"
            c = name1 + "." +  n3 + "@Alf.no"

            if ( name2.length > 1 ) {
                document.getElementById("output1").innerHTML = b;
            } else {
                document.getElementById("output1").innerHTML = c;

            }
            
}
  
