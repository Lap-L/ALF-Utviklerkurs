

    function snitt() {


            let sli = document.getElementById("p1").innerHTML;
            
            let sli1;
            sli1 = sli.slice(52);

                document.getElementById("p1").innerHTML = sli1;

}


    function length() {

            let len = document.getElementById("p2").innerHTML;
            
            let len1;
            len1 = len.length;

                document.getElementById("p2").innerHTML = len1 ;
}


    function store() {

            let stor = document.getElementById("p3").innerHTML;
            
            let stor1;
            stor1 = stor.toUpperCase();

                document.getElementById("p3").innerHTML = stor1 ;
}


    function smol() {

            let smol = document.getElementById("p4").innerHTML;
            
            let smol1;
            smol1 = smol.toLowerCase();

                document.getElementById("p4").innerHTML = smol1 ;
}


    function bytt() {

            let bytt = document.getElementById("p5").innerHTML;
            
            

                document.getElementById("p5").innerHTML = bytt.replace("Pompel", "Pilt");
}


    function utdrag() {

            let sub = document.getElementById("p6").innerHTML;
            
            let sub1;
            sub1 = sub.substr(15, 6);

                document.getElementById("p6").innerHTML = sub1 ;
}


    function finnIndeks() {

            let indeks = document.getElementById("p7").innerHTML;
            
            let indeks1;
            indeks1 = indeks.indexOf("f");

                document.getElementById("p7").innerHTML = indeks1 ;
}


    function inneholder() {

            let inn = document.getElementById("p8").innerHTML;
            
            let inn1;
            inn1 = inn.includes("inne");

                document.getElementById("p8").innerHTML = inn1 ;
}