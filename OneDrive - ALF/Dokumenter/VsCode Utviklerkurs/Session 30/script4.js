
        
        
        function array() {
       
         
         let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
         let month = months[Number(document.getElementById("input").value)-1];
         document.getElementById("output1").innerHTML = month;

         let Januar, Februar, Mars, April, Mai, Juni, Juli, August, September, Oktober, November, Desember ;
         Januar = 31
         Februar= 28
         Mars= 31 
         April= 30 
         Mai= 31 
         Juni= 30 
         Juli= 31 
         August= 31 
         September= 30 
         Oktober= 31 
         November= 30 
         Desember= 31

         let day;
         switch (month) {

            case "Januar":

            day = "31";

            break;

            case "Februar":

            day = "28";

            break;

            case "Mars":

            day = "31";

            break;
            
            case "April":

            day = "30";

            break;

            case "Mai":

            day = "31";

            break;

            case "Juni":

            day = "30";

            break;

            case "Juli":

            day = "31";

            break;

            case "August":

            day = "31";

            break;

            case "September":

            day = "30";

            break;

            case "Oktober":

            day = "31";

            break;
            
            case "November":

            day = "30";

            break;

            case "Desember":

            day = "31";

            break;
}
         
document.getElementById("output2").innerHTML = day;

    
            
            
        }

        

