
        
        
        function array() {
       
         
         let Brann = [
		{ fornavn: "Donald",
		  etternavn: "Duck",
          draktnummer: "1",
		  posisjon: "Keeper",
          
		 },

		{ fornavn: "Ole",
		  etternavn: "Duck",
          draktnummer: "2",
		  posisjon: "Forsvarspiller",
		 }
         ,

		{ fornavn: "Dole",
		  etternavn: "Duck",
          draktnummer: "3",
		  posisjon: "Midtbanespiller",
		 }
         ,

		{ fornavn: "Doffen",
		  etternavn: "Duck",
          draktnummer: "4",
		  posisjon: "Angrepspiller",
		 },

         { fornavn: "Donald2",
		  etternavn: "Duck2",
          draktnummer: "5",
		  posisjon: "Keeper",
          
		 },

		{ fornavn: "Ole2",
		  etternavn: "Duck2",
          draktnummer: "6",
		  posisjon: "Forsvarspiller",
		 }
         ,

		{ fornavn: "Dole2",
		  etternavn: "Duck2",
          draktnummer: "7",
		  posisjon: "Midtbanespiller",
		 }
         ,

		{ fornavn: "Doffen2",
		  etternavn: "Duck2",
          draktnummer: "8",
		  posisjon: "Angrepspiller",
		 },

         { fornavn: "Donald3",
		  etternavn: "Duck3",
          draktnummer: "9",
		  posisjon: "Keeper",
          
		 },

		{ fornavn: "Ole3",
		  etternavn: "Duck3",
          draktnummer: "10",
		  posisjon: "Forsvarspiller",
		 }
         ,

		{ fornavn: "Dole3",
		  etternavn: "Duck3",
          draktnummer: "11",
		  posisjon: "Midtbanespiller"
		 }
         
         
		]	

        Angrepspiller = "angrepspillere: Doffen Duck, Doffen2 Duck2"
        Keeper = "Keepere: Donald Duck, Donald2 Duck2, Donald3 Duck3 "
        Forsvarspiller = "Forsvarspillere: Ole Duck, Ole2 Duck2, Ole3 Duck3 "
        Midtbanespiller = "Midtbanespillere: Dole Duck, Dole2 Duck2, Dole3 Duck3 "
        svar = ""
        svar2 = ""
        svar3 = ""

        for(let i = 0; i < Brann.length; i++) {

            console.log(Brann[i].fornavn)

            svar += "<br>" + Brann[i].fornavn + " " + Brann[i].etternavn + " har draktnummer " + Brann[i].draktnummer + ", og er " + Brann[i].posisjon + ". <br>" 

            if (Brann[i].posisjon === "Angrepspiller") {
                 svar2 += "<br>" + "angrepspiller : " + Brann[i].fornavn + " " + Brann[i].etternavn + ". <br>" ;
        }
             

        let ops = document.getElementById("ops").value;

        if ( ops === "Angrepspiller" ) {
                Brann[i].posisjon === "Angrepspiller"
                svar3 = Angrepspiller + ". <br>" ;
               
            } else if ( ops === "Keeper" ) {
                Brann[i].posisjon === "Keeper"
                svar3 = Keeper + ". <br>" ;          

            }
            else if ( ops === "Forsvarspiller" ) {
                Brann[i].posisjon === "Forsvarspiller"
                svar3 = Forsvarspiller + ". <br>" ;      

            }
             else {
                Brann[i].posisjon === "Midtbanespiller"
                svar3 = Midtbanespiller + ". <br>" ;

            }

        }

         document.getElementById("output1").innerHTML += svar;
         document.getElementById("output2").innerHTML += svar2;
         document.getElementById("output3").innerHTML = svar3;
         
         


            
        }

        

