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

function checkBeeline(code) {
    let codes = ["770", "771", "772"];
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

    if(checkBeeline(operatorCode))
        return "Beeline";

    return "ERROR";
}