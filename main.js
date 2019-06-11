let calcKg = document.getElementById("kg");
let calcG = document.getElementById("g");
let calcO = document.getElementById("ounces");
let weightInput = document.getElementById("weightInput");

let kg = 0;
let g = 0; 
let ounces = 0;



function CalculateToKg() {
    let lbs = weightInput.value;
    kg = lbs / 2.205;
    g = kg * 1000;
    ounces = lbs * 12;
    changeWeight();
}

function changeWeight() {
    calcKg.innerHTML = "KiloGrams: " + kg.toFixed(2);
    calcG.innerHTML = "Grams: " + g.toFixed(2);
    calcO.innerHTML = "Ounces: " + ounces.toFixed(2);

}

function check() {
    let kgChecked = document.getElementById("kgChecked");
    if (kgChecked.checked == true) {
        console.log("checked");
        document.getElementById("kgBox").style.display = "block";  
        
    } else {
        console.log("unchecked");
        document.getElementById("kgBox").style.display = "none";
        
    }
 
}

function gChecked() {
    let gChecked = document.getElementById("gChecked")
    if (gChecked.checked == true) {
        document.getElementById("gBox").style.display = "block";
        
    } else {
        document.getElementById("gBox").style.display = "none";
    }
}

function oChecked() {
    let ouncesChecked = document.getElementById("ouncesChecked");
    if (ouncesChecked.checked == true) {
        document.getElementById("oBox").style.display = "block";

    } else {
        document.getElementById("oBox").style.display = "none";
    }
}

function clearForm() {
    calcKg.innerHTML = "Kg";
    calcG.innerHTML = "g"
    calcO.innerHTML = "Oz";
    weightInput.value = "";
}