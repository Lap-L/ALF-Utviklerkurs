
// ...existing code...
function calc() {
    const input = parseFloat(document.getElementById("number1").value);
    const currency1 = document.getElementById("currency1").value;
    const currency2 = document.getElementById("currency2").value;

    // Use fixed rates (replace with live rates if needed)
    const rate = {
        usd_nok: 10,
        eur_nok: 11
    };

    // Convert from currency1 to NOK
    let valueInNok;
    if (currency1 === "usd") {
        valueInNok = input * rate.usd_nok;
    } else if (currency1 === "euro" || currency1 === "eur") {
        valueInNok = input * rate.eur_nok;
    } else if (currency1 === "nok") {
        valueInNok = input;
    } else {
        document.getElementById("output1").innerText = "Unknown source currency";
        return;
    }

    // Convert NOK to currency2
    let result;
    if (currency2 === "nok") {
        result = valueInNok;
    } else if (currency2 === "usd") {
        result = valueInNok / rate.usd_nok;
    } else if (currency2 === "euro" || currency2 === "eur") {
        result = valueInNok / rate.eur_nok;
    } else {
        document.getElementById("output1").innerText = "Unknown target currency";
        return;
    }

    document.getElementById("output1").innerText = result.toFixed(2);
}
// ...existing code...