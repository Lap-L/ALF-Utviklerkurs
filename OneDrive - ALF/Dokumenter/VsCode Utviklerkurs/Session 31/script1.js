
        
        
        function array() {
       
         
         let mineDyr = [
		{ navn: "Katt1",
		  fodselsAar: 2020,
		  mor: "Kattmor1",
          far: "Kattfar1",
          rase: "skog1"
		  
		 },

		{ navn: "Katt2",
		  fodselsAar: 2010,
		  mor: "Kattmor2",
          far: "Kattfar2",
          rase: "skog2"
		 }
         ,

		{ navn: "Katt3",
		  fodselsAar: 2015,
		  mor: "Kattmor3",
          far: "Kattfar3",
          rase: "skog3"
		 }
         ,

		{ navn: "Katt4",
		  fodselsAar: 2018,
		  mor: "Kattmor4",
          far: "Kattfar4",
          rase: "skog4"
		 }
         ,

		{ navn: "Katt5",
		  fodselsAar: 2009,
		  mor: "Kattmor5",
          far: "Kattfar5",
          rase: "skog5"
		 }
		]	

        for(let i = 0; i < mineDyr.length; i++) {

            console.log(mineDyr[i].navn)

            svar +=  `${mineDyr[i].navn} ble født ${mineDyr[i].fodselsAar} <br>`
        }


         document.getElementById("output1").innerHTML += ny + ", ";


            
        }

        

