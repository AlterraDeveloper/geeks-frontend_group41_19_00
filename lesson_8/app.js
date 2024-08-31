const $form = document.querySelector('#form');
const $phoneInput = $form.querySelector('#phoneNumber');
const $amountInput = $form.querySelector('#amount');
const $feeInput = $form.querySelector('#fee');

$amountInput.addEventListener("input", function () {
    const amount = $amountInput.value;

    if (amount > 0 && amount <= 10_000) {
        $feeInput.value = Math.round(amount * 0.01);
    } else if (amount > 10_000 && amount <= 50_000) {
        $feeInput.value = Math.round(amount * 0.02);
    } else if (amount > 50_000 && amount <= 100_000) {
        $feeInput.value = Math.round(amount * 0.03);
    } else {
        $feeInput.value = 0;
    }
});

$phoneInput.addEventListener("change", function () {
    const phone = $phoneInput.value;
    $phoneInput.value = formatPhone(phone);
});

$phoneInput.addEventListener("input", function () {
    const phone = $phoneInput.value;
    const operatorCode = detectOperator(phone);
    let backgroundImg;

    switch (operatorCode.toUpperCase()) {
        case "MEGA":
            backgroundImg = "images/mega.jpg";
            break;
        case "O!":
            backgroundImg = "images/o.jpg";
            break;
        case "BEELINE":
            backgroundImg = "images/beeline.jpg";
            break;
    }

    if (backgroundImg) {
        document.body.style.backgroundImage = `url(${backgroundImg})`;
        document.body.style.backgroundSize = "200px";
    } else {
        document.body.style.backgroundImage = "none";
    }
});

$form.addEventListener("submit", function (event) {
    event.preventDefault();

    const $formControls = $form.querySelectorAll('.form-control');
    for (const $formControl of $formControls) {
        $formControl.classList.remove("success", "error");
    }

    // validation
    const phone = $phoneInput.value;
    if (!phone) {
        setError($phoneInput, "Заполните номер телефона")
    } else {
        setSuccess($phoneInput);
    }

    const amount = $amountInput.value;
    if (amount <= 0) {
        setError($amountInput, "Неверная сумма")
    } else if (amount > 100_000) {
        setError($amountInput, "Максимальная сумма 100 000 сом");
    } else {
        setSuccess($amountInput);
    }

    const fee = $feeInput.value;
    if (fee > 0) {
        setSuccess($feeInput);
    } else {
        setError($feeInput, "Мы бесплатно не работаем");
    }
})


function setError(inputElement, errorText) {
    const $formControl = inputElement.parentElement;
    $formControl.classList.add("error");
    $formControl.querySelector("small").textContent = errorText;
}

function setSuccess(inputElement) {
    const $formControl = inputElement.parentElement;
    $formControl.classList.add("success");
}