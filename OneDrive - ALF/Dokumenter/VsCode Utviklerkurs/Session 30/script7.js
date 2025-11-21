
        
        
        function array() {
       
         
         let arr = ["Hans","Ole","Nils","Olav","Per","Knut","Kari","Line","Pia"];
         let ny = arr[Math.floor (Math.random() * 9 )];
         
         

        

         document.getElementById("output1").innerHTML += ny + ", ";


            
        }

        


   

        let arr = ["Hans","Ole","Nils","Olav","Per","Knut","Kari","Line","Pia"];

        // 2 måter å løse denne på. 1) Slette de som allerede er trukket fra arrayet, 2) bruke en annen array for å holde styr på hvilke personer som allerede er trukket."

        let alleredeTrukket = [];   // Denne arrayen kan brukes for å holde styr på hvilke personer som allerede er trukket, slik at vi kan sjekke om de allerede har vunnet

        function trekkTrePersoner() { // Denne funksjonen trekker 3 personer fra arrayet arr, og legger dem til i output-diven
            let trekning = "";
            
            alleredeTrukket = [];   // Tømmer arrayet om en har lyst å kjøre flere trekninger uten å laste siden på nytt

            for (let i = 0; i < 3; i++) {
                trekning += ` ${trekkPerson()} `;
            }
            document.getElementById("output").innerText = trekning;

        }

        function trekkPerson() { // Denne funksjonen trekker en person fra arrayet arr, og returnerer navnet på personen om den ikke allerede er trukket fra før!
            let person = Math.floor(Math.random() * arr.length);
            while (alleredeTrukket.includes(arr[person])) { // Sjekker om personen allerede er trukket
                person = Math.floor(Math.random() * arr.length); // Hvis personen allerede er trukket, trekk en ny person
            }
            alleredeTrukket.push(arr[person]); // Legger til personen i alleredeTrukket arrayen, slik at vi ikke trekker samme person igjen
            // console.log(alleredeTrukket); // Kan brukes for å se hvilke personer som allerede er trukket
            return arr[person];
        }
   
