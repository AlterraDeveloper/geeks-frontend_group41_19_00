
function getDaysInMonth(date) {
    let lastDayInMonth =
        new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDayInMonth.getDate();
}

function getEmptyDays(date) {
    let firstDayInMonth = new Date(date.getFullYear(),
        date.getMonth(), 1);
    if (firstDayInMonth.getDay() === 0 /* SUNDAY */) {
        return 6;
    }
    return firstDayInMonth.getDay() - 1;
}

function renderCalendar(){
    let currentDate = new Date();

    let $daysContainer = document.querySelector('.days');
    $daysContainer.innerHTML = "";

    for (let i = 0; i < getEmptyDays(currentDate); i++) {
        let div = document.createElement('div');
        $daysContainer.appendChild(div);
    }

    for (let i = 1; i <= getDaysInMonth(currentDate); i++) {
        // <div class="day">4</div>
        let div = document.createElement("div");
        div.className = "day";
        div.textContent = String(i);

        if (i === currentDate.getDate()) {
            div.classList.add("current");
        }

        $daysContainer.append(div);
    }

    let $header = document.querySelector(".header");
    let $monthName = $header.querySelector("h1");
    let $date = $header.querySelector("h2");

    $monthName.innerText = currentDate.toLocaleString('ru-RU', {month: 'long'});
    $date.innerText = currentDate.toLocaleString('ru-RU');
}

setInterval(renderCalendar, 1000);


