
        
        
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

    

    // Tøm tidligere utskrift
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "";

    let svar = "";
    let svar2 = "";
    let kortUt = ""; // HTML for cards (c)

    // Les dropdown-verdi EN GANG før loopen
    let ops = document.getElementById("ops").value;

    for (let i = 0; i < Brann.length; i = i + 1) {
      console.log(Brann[i].fornavn);

      // a) generell utskrift for hver spiller
      svar = svar + "<br>" + Brann[i].fornavn + " " + Brann[i].etternavn + " har draktnummer " + Brann[i].draktnummer + ", og er " + Brann[i].posisjon + ". <br>";

      // b) samle angrepsspillere
      if (Brann[i].posisjon === "Angrepspiller") {
        svar2 = svar2 + "<br>" + "angrepsspiller : " + Brann[i].fornavn + " " + Brann[i].etternavn + ". <br>";
      }

      // c) hvis posisjonen matcher dropdown-valget, bygg et kort for spilleren
      if (Brann[i].posisjon === ops) {
        // img src uses draktnummer => you can place images in images/player{nr}.png
        var imgSrc = "images/player" + Brann[i].draktnummer + ".png";
        kortUt = kortUt + '<div class="card">'
          + '<img src="' + imgSrc + '" alt="Bilde av ' + Brann[i].fornavn + '" onerror="this.style.display=\'none\'">'
          + '<h3>' + Brann[i].fornavn + ' ' + Brann[i].etternavn + '</h3>'
          + '<p>Nr: ' + Brann[i].draktnummer + '</p>'
          + '<p>Posisjon: ' + Brann[i].posisjon + '</p>'
          + '</div>';
      }
    }

    // Skriv alt til siden
    document.getElementById("output1").innerHTML = svar;
    document.getElementById("output2").innerHTML = svar2;
    if (kortUt === "") {
      document.getElementById("output3").innerHTML = "Ingen spillere funnet for: " + ops;
    } else {
      // wrap cards in a grid container
      document.getElementById("output3").innerHTML = '<div class="card-grid">' + kortUt + '</div>';
    }
         
         


            
        }

        

