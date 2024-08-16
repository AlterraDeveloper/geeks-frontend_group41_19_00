 let sum = prompt("Enter sum");
 let fuelType = prompt("Choose a fuel type(92, 95, gaz)");

console.log(sum, fuelType);

let fuelPrice;

// > < >= <= == != === !==

switch (fuelType) {
    case "92": // ===
        fuelPrice = 65;
        break;
    case "95":
        fuelPrice = 75;
        break;
    case "gaz":
        fuelPrice = 30;
        break;
    default:
        fuelPrice = null;
}

// Falsy: false, 0, NaN, undefined, null, ""

if (sum && fuelPrice) {
    console.log(sum / fuelPrice + " litres");
} else {
    console.warn("Invalid data. Try again...");
}

let carName = prompt("Enter car Name");

switch (carName) {
    case "bmw":
    case "porsche":
    case "audi":
        console.log("Germany🇩🇪");
        break;
    case "honda":
    case "toyota":
    case "subaru":
    case "nissan":
        console.log("Japan🇯🇵");
        break;
    case "kia":
    case "hyunday":
        console.log('Korea');
        break;
}

// Array - массив


// Loops - циклы
// for..of
// for
// for..in
// while
// do..while

let homeworkPoints = [10, 10, 9, 8, 8, 9, 5, 7];
let hwPoints = [10, 9];

console.log("You make " + hwPoints.length + " homeworks");
let totalPoints = 0;

for (let points of homeworkPoints) {
    // totalPoints = totalPoints + points;
    totalPoints += points;
}
console.log("Total points:", totalPoints);

for (let i = 1; i <= 7; i++) {
    switch (i) {
        case 1:
        case 4:
            console.log("geeks");
            break;
        case 2:
            console.log("tue");
            break;
        case 3:
            console.log("wed");
            break;
        case 5:
            console.log("fri");
            break;
        case 6:
            console.log("sat");
            break;
        case 7:
            console.log("sun");
            break;
    }
}

for(let y = 2024, order=33; y < 2100; y += 4, order++){
    console.log(order + "=>" + y);
}