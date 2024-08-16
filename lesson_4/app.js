// Functions

// function declaration
function applyDiscount(price, discount) {
    let result = price * (100 - discount) / 100;
    return result;
}

// function expression
let applyPromocode = function (price, promocode) {
    switch (promocode) {
        case "SUMMER_2024":
            return applyDiscount(price, 20)
        case "YA_OT_EVGENIYA":
            return applyDiscount(price, 50);
    }
    return price;
}

let price = 100_000;
let blackFridayPrice = applyDiscount(price, 60);

console.log({price, blackFridayPrice});

console.log("YA_OT_EVGENIYA",
    applyPromocode(price, "YA_OT_EVGENIYA"));
console.log("NEW_YEAR_2025",
    applyPromocode(price, "NEW_YEAR_2025"));
console.log("No promocode",
    applyPromocode(price, true));

// +996 555 444 666
// 0555444666
// 996 (555) 444-666
function formatPhone(phoneNumber) {
    let result = "";
    for (let char of phoneNumber) {
        if (char >= "0" && char <= "9") {
            result += char;
        }
    }

    if (result.startsWith("0"))
        result = result.slice(1);

    if (result.length !== 12)
        result = "996" + result;

    return result;
}

function getOperatorCode(phoneNumber) {
    return phoneNumber.slice(3, 6)
}

function checkNurtelecom(code) {
    let codes = ["500", "501", "502"];
    return codes.includes(code);
}

function checkMega(code) {
    let codes = ["550", "551", "552"];
    return codes.includes(code);
}

// 996555444666
function detectOperator(phoneNumber) {

    let formattedPhoneNumber = formatPhone(phoneNumber);
    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if (checkNurtelecom(operatorCode))
        return "O!";

    if (checkMega(operatorCode))
        return "Mega";

    // if(checkBeeline(operatorCode))
    //     return "Beeline";

    return "ERROR";
}