// DOM - Document Object Model


let $counter = document.getElementById("counter");

let $decreaseButton = document.getElementById("decrease");
let $resetButton = document.querySelector("#reset");
let $increaseButton = document.querySelector("#increase");


let counter = 0;

function updateCounter() {
    $counter.innerText = counter;

    if (counter > 0) {
        $counter.style.color = "greenyellow";
    } else if (counter < 0) {
        $counter.style.color = "red";
    } else {
        $counter.style.color = "cyan";
    }
}

updateCounter();

$decreaseButton.addEventListener("click", function () {
    counter--;
    updateCounter();
})

$resetButton.addEventListener("click", function () {
    counter = 0;
    updateCounter();
})

$increaseButton.addEventListener("click", function () {
    counter++;
    updateCounter();
})

document.body.addEventListener("contextmenu",
    function (event) {
                event.preventDefault();
                alert("CONTEXT MENU!!!")
    })