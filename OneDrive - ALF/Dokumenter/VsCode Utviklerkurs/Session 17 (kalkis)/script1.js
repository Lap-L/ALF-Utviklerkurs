          

       

        
        function press(num) {
            var d = document.getElementById('display');
            
            d.value += num;
        }

        function clearDisplay() {
            var d = document.getElementById('display');
            
            d.value = "";
        }

        function calculate() {
            var d = document.getElementById('display');
            d.value = eval(d.value);
            
            
            
        }
                
        //function add5todisplay() {
        //display.value += "5";