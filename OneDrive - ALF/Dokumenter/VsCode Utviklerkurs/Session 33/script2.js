let selection = document.getElementById("oppgaveF").value;
let dd = duck.filter((person) => {
    return person.etternavn == selection
})
let ops = document.getElementById("ops").value;

    for (let i = 0; i < Brann.length; i = i + 1) {
      console.log(Brann[i].fornavn);

      
      svar = svar + "<br>" + Brann[i].fornavn + " " + Brann[i].etternavn + " har draktnummer " + Brann[i].draktnummer + ", og er " + Brann[i].posisjon + ". <br>";

      
      if (Brann[i].posisjon === "Angrepspiller") {
        svar2 = svar2 + "<br>" + "angrepsspiller : " + Brann[i].fornavn + " " + Brann[i].etternavn + ". <br>";
      }

      
      if (Brann[i].posisjon === ops) {
        
        var imgSrc = "images/player" + Brann[i].draktnummer + ".png";
        kortUt = kortUt + '<div class="card">'
          + '<img src="' + imgSrc + '" alt="Bilde av ' + Brann[i].fornavn + '" onerror="this.style.display=\'none\'">'
          + '<h3>' + Brann[i].fornavn + ' ' + Brann[i].etternavn + '</h3>'
          + '<p>Nr: ' + Brann[i].draktnummer + '</p>'
          + '<p>Posisjon: ' + Brann[i].posisjon + '</p>'
          + '</div>';
      }
    }

    
    document.getElementById("output1").innerHTML = svar;
    document.getElementById("output2").innerHTML = svar2;
    if (kortUt === "") {
      document.getElementById("output3").innerHTML = "Ingen spillere funnet for: " + ops;
    } else {
      
      document.getElementById("output3").innerHTML = '<div class="card-grid">' + kortUt + '</div>';
    }