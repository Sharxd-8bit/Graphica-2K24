function move() {
    let elem = document.getElementById("myBar");
    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width + '%';
        }
    }, 50); // Adjust speed here (in milliseconds)
}
