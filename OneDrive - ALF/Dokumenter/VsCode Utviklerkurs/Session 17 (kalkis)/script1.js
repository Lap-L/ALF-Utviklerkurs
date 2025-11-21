          

       

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
                