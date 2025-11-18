
        
        
        function array() {
       
         
         let mineDyr = [
		{ navn: "Katt1",
		  fodselsAar: 2020,
          alder: 5,
		  mor: "Kattmor1",
          far: "Kattfar1",
          rase: "skog1"
		  
		 },

		{ navn: "Katt2",
		  fodselsAar: 2010,
          alder: 15,
		  mor: "Kattmor2",
          far: "Kattfar2",
          rase: "skog2"
		 }
         ,

		{ navn: "Katt3",
		  fodselsAar: 2015,
          alder: 10,
		  mor: "Kattmor3",
          far: "Kattfar3",
          rase: "skog3"
		 }
         ,

		{ navn: "Katt4",
		  fodselsAar: 2018,
          alder: 7,
		  mor: "Kattmor4",
          far: "Kattfar4",
          rase: "skog4"
		 }
         ,

		{ navn: "Katt5",
		  fodselsAar: 2009,
          alder: 16,
		  mor: "Kattmor5",
          far: "Kattfar5",
          rase: "skog5"
		 }
		]	

        svar = ""
        svar2 = ""
        svar3 = ""

        for(let i = 0; i < mineDyr.length; i++) {

            console.log(mineDyr[i].navn)

            svar += "<br>" + mineDyr[i].navn + " ble født " + mineDyr[i].fodselsAar + "<br>"
            svar2 += "<br>" +  mineDyr[i].navn + " sin mor heter "  + mineDyr[i].mor + ", og faren heter " +  mineDyr[i].far + "<br>"
            svar3 += "<br>" +  mineDyr[i].navn + " er nå "  + mineDyr[i].alder + " år " + "<br>"
            
        }


         document.getElementById("output1").innerHTML += svar;
         document.getElementById("output2").innerHTML += svar2;
         document.getElementById("output3").innerHTML += svar3;


            
        }

        

