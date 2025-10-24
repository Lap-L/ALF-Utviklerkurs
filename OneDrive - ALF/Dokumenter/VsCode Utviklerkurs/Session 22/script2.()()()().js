

    
    function item1() {
    let item1 = document.getElementById("item1").innerHTML;
    
  document.getElementById("display").innerHTML = +item1 ;

}
function snitt() {


            let sli = document.getElementById("p1").innerHTML;
            
            let sli1;
            sli1 = sli.slice(52);

                document.getElementById("p1").innerHTML = sli1;

}


    function item2() {
    let item2 = document.getElementById("item2").innerHTML;
    
  document.getElementById("display").innerHTML = +item2 ;
}


    function calculate() {
            let username = document.getElementById("username").value;
            
            

            if ( username.length > 0 ) {
                document.getElementById("output1").innerHTML = "Hei, " + username ;
                document.getElementById("output1").classList.add("verified");
                document.getElementById("output1").classList.remove("refused");
            } else {
                document.getElementById("output1").innerHTML ="Vennligst skriv inn navnet ditt.";
                document.getElementById("output1").classList.add("refused");
                document.getElementById("output1").classList.remove("verified");

            }

}