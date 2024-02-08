// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon 
// 1 kilogram = 2.204 pound 

const inputElement = document.getElementById("value-input");
const imperialInput = document.getElementById("to-imperial");
const metricInput = document.getElementById("to-metric");
const convertBtn = document.querySelector(".convert-btn");
const lngValue = document.querySelector(".len-value");
const massValue = document.querySelector(".mass-value");
const volValue = document.querySelector(".vol-value");

console.log();

function toImperial(x) {
    let toFeet = (x * 3.281).toFixed(3);
    let toPound = (x * 2.204).toFixed(3);
    let toGallon = (x * 0.264).toFixed(3);

    lngValue.textContent = toFeet;
    lngValue.nextElementSibling.textContent = "Feets";

    massValue.textContent = toPound;
    massValue.nextElementSibling.textContent = "Pounds";

    volValue.textContent =  toGallon;
    volValue.nextElementSibling.textContent = "Gallons";
}



function toMetric(y) {
    let toMeter = (y / 3.281).toFixed(3);
    let toLiter = (y / 0.264).toFixed(3);
    let toKG = (y / 2.204).toFixed(3);


    lngValue.textContent = toMeter;
    lngValue.nextElementSibling.textContent = "Meters";
    
    massValue.textContent = toLiter;
    massValue.nextElementSibling.textContent = "Liters";

    volValue.textContent = toKG;
    volValue.nextElementSibling.textContent = "Kilograms";


}

function convert() {
    let value = inputElement.value;
    if(value !== "") {
        if (metricInput.checked) {
            console.log("to metric")
            toMetric(value)
        } else if (imperialInput.checked) {
            console.log("to imp")
            toImperial(value)
        }
    }

}

convertBtn.addEventListener("click", convert);

