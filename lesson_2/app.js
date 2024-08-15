// Data types

/*
string
number
boolean
undefined
null
 */

// Camel case
let myName = "Evgeniy";
let myName2 = "Evgeniy";
let studentsCount = 5;
let isLearnJS = true;
let iLoveJavaScript;

myName, studentsCount, isLearnJS, iLoveJavaScript;

let myPhoneNumber; // undefined

console.log("My phone number = ", myPhoneNumber);

let myEmail = null;

console.log("My email = ", myEmail);

// key - value
let vehicle = {
    ownerName: "Askarov Azat",
    govNum: "01KG123ABC",
    engineVolume: 3.0,
    mileage: 350_000,
    allowTinting: false
};

// Conditions - условия

let userName = "Almaz"
let userEmail = "brilliant5carat@gmail.com";
let userPhoneNumber = "+996 999 112233";

let message = "Happy birthday, " + userName + "!🎉🎉🎉"

// == === != !== > < >= <=

if (userEmail !== null) {
    let emailMessage = {
        from: "geeks_academy@gmail.com",
        to: userEmail,
        body: message
    }
    console.log("Send email to user", emailMessage);
} else if (userPhoneNumber !== null) {
    console.log("Send SMS to user");
} else {
    console.warn("User email and phone is empty");
}

// && || !

if (userEmail !== null && userPhoneNumber !== null) {
    console.log("Send SMS to user");
    console.log("Send email to user");
} else {
    console.error("User email and phone is empty");
}

let weekday = "friday";

if (weekday === "monday" || weekday === "thursday") {
    console.log("Yahooo! Today is GEEKS lesson");
} else {
    console.log("Do homework");
}

let fuelLiters = 40;
let cardStatus = "PLATINUM";

let points = 0;


switch (cardStatus) {
    case "SILVER":
        points = fuelLiters * 0.5;
        break;
    case "GOLD":
        points = fuelLiters * 0.75;
        break;
    case "PLATINUM":
        points = fuelLiters;
        break;
}

console.log(fuelLiters + " L => " + points + " KGS");

let place = 2;
let medal;

switch (place) {
    case 1:
        medal = "gold";
        break;
    case 2:
        medal = "silver";
        break;
    case 3:
        medal = "bronze";
        break;
}


