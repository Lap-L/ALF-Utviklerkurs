
let utskrift = document.getElementById("output");
async function main() {
try {
let arr = await getJSONData();
await displayJSONData(arr);
} catch (error) {
console.error("An error occurred in main():", error);
}
}
async function getJSONData() {
try {
// feil lenke med vilje

let url = "https://jsonplaceholder.typicode.com/possts";
let res = await fetch(url);
if (!res.ok) {
utskrift.innerHTML = `Error fetching data from the API - Status: ${res.status}`;
}
let data = await res.json();
return data;
} catch (error) {
console.error("An error occurred in getJSONData():", error);
return "Error connecting to the remote API";
}

async function displayJSONData(arr) {
try {
let result = "";
arr.forEach(element => {
result += `<h3> Tittel: ${element.title}</h3>${element.body}<br><hr>`;
});
utskrift.innerHTML = result;
} catch (error) {
utskrift.innerHTML = "Error displaying data";
console.error("An error occurred in displayJSONData():", error);
}
}
}