
        
        
        function array() {
       
         
         let Duck = [
		{ fornavn: "Donald",
		  etternavn: "Duck",
          adresse: "andeby",
		  poststed: "1000",
          telefon: { 
            privat: 123 ,
            jobb: 456
			},
            epost: { 
                privat: "donald@duck.no",
                jobb: "donald@andeby.no"

			},
		 },

		{ fornavn: "Ole",
		  etternavn: "Duck",
          adresse: "andeby",
		  poststed: "1000",
          telefon: { 
            privat: 1234 ,
            jobb: 4567
			},
            epost: { 
                privat: "Ole@duck.no",
                jobb: "Ole@andeby.no"

			},
		 }
         ,

		{ fornavn: "Dole",
		  etternavn: "Duck",
          adresse: "andeby",
		  poststed: "1000",
          telefon: { 
            privat: 12345 ,
            jobb: 45678
			},
            epost: { 
                privat: "Dole@duck.no",
                jobb: "Dole@andeby.no"

			},
		 }
         ,

		{ fornavn: "Doffen",
		  etternavn: "Duck",
          adresse: "andeby",
		  poststed: "1000",
          telefon: { 
            privat: 123456 ,
            jobb: 456789
			},
            epost: { 
                privat: "Doffen@duck.no",
                jobb: "Doffen@andeby.no"

			},
		 }
         
		]	

        svar = ""
        svar2 = ""
        svar3 = ""

        for(let i = 0; i < Duck.length; i++) {

            console.log(Duck[i].navn)

            svar += "<br>" + "fornavn: " + Duck[i].fornavn + "<br>" + "etternavn: "+ Duck[i].etternavn + "<br>"
            + "adresse: " + Duck[i].adresse + "<br>" + "poststed: "+ Duck[i].poststed + "<br>"
            + "telefon: " + "<br>" + "privat: " + Duck[i].telefon.privat + "<br>" + "jobb: " + Duck[i].telefon.jobb + "<br>"
            + "epost: " + "<br>" + "privat: " + Duck[i].epost.privat + "<br>" + "jobb: " + Duck[i].epost.jobb + "<br>"
            svar2 += "<br>" + "Epost-adressen til " + Duck[i].fornavn + " er " + Duck[i].epost.privat + "<br>"
            svar3 += "<br>" + "fornavn: " + Duck[i].fornavn + "<br>" + "etternavn: "+ Duck[i].etternavn + "<br>"
            + "jobb tlf: " + Duck[i].telefon.jobb + "<br>"
            
            
        }


         document.getElementById("output1").innerHTML += svar;
         document.getElementById("output2").innerHTML += svar2;
         document.getElementById("output3").innerHTML += svar3;
         


            
        }

        

