// document.addEventListener("DOMContentLoaded", function () {

    let $container = document.querySelector('.container');
    let $flashlight = document.querySelector('.flashlight');

    $container.addEventListener("mousemove", function (event) {
        $flashlight.style.display = "block";
        $flashlight.style.top = event.offsetY + "px";
        $flashlight.style.left = event.offsetX + "px";
    });

    $container.addEventListener("mouseleave", function () {
        $flashlight.style.display = "none";
    });

    let flashlightRadius = 50; // in pixels

    $container.addEventListener("wheel", function (event) {
        event.preventDefault();

        if (event.deltaY < 0) { // maximize
            flashlightRadius = Math.min(60, flashlightRadius + 10);
        } else { // minimize
            flashlightRadius = Math.max(30, flashlightRadius - 10);
        }

        $flashlight.style.boxShadow = `0 0 20px ${flashlightRadius}px white`;
        $flashlight.style.border = `${flashlightRadius}px solid white`;
        $flashlight.style.borderRadius = `${flashlightRadius}px`;
    });
// })

