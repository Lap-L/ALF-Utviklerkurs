          


        var d = document.getElementById('display');
        function press(num) {
            
            d.value += num;
        }

        function clearDisplay() {   
            
            d.value = "";
        }

        function calculate() {
            
            d.value = eval(d.value);
   
        }
                
        //function add5todisplay() {
        //display.value += "5";