// Session 34 - Oppgave 3: fetch Daglige_steg.txt, parse numbers, compute total & average

//Oppgave 3

//Du jobber som servitør og har fått masse tips de siste 30 dagene. Du har registrert alle tipsene i en tekstfil som du har kalt "Daglige_steg.txt" og satser på det er nok til å lure skattemyndighetene om de skulle komme og snoke!

//Filen er på formatet 

//123, 345, 23, 567, 123, 345, 3, 122, .....

//Altså et tall for hver dag i 31 dager.

//Du skal lage denne filen og legge til et beløp for hver dag, med komma som skilletegn. (ofte kalt CSV eller Comma Separated Values)

//a) Bruk fetch() til å lese inn innholdet av filen, og skriv det ut på nettsiden. Fyll gjerne på med ledetekst ala "1 januar: <kroner> kr..."

//b) les inn teksten slik som i oppgave a), men i stedet for på bare skrive den ut på siden, ønsker du å regne litt verdier først.

//-Del opp teksten i enkelttall for hver dag, og legg hvert av disse tallene på plass i en array som du oppretter. (Tips: skilletegnet mellom alle tallene i teksten skal være et komma),
//-Når arrayet er fyllt med tall, kan du beregne totalsummen og skrive det ut til siden med passende ledetekst, samt gjennomsnittet for alle dagene.


async function lesTekstFil() {
    // benytter fetch() for å "hente" filinnholdet

    const res = await fetch('Daglige_steg.txt');
    // bruker .text() for å hente ut kun tekstinnholdet

    const text = await res.text();
    console.log(text);
    
    var parts = text.split(',');
    var lines = [];
    for (var i = 0; i < parts.length; i++) {
        var v = parts[i];
        if (v !== '') {
            lines.push((i+1) + '.Januar: ' + v);
        }
    }
    var out = lines.join('<br>');
    var outEl = document.getElementById('output1');
    if (outEl) outEl.innerHTML = out;

    
    var sum = 0;
    for (var j = 0; j < lines.length; j++) {
        sum += Number(parts[j]);
    }
    var avg = sum / lines.length;
    var outEl2 = document.getElementById('output2');
    if (outEl2) outEl2.innerHTML = 'Total: ' + sum + ' kr<br>Gjennomsnitt: ' + avg.toFixed(2) + ' kr';

}










window.onload = lesTekstFil();
