setInterval(changeColor, 1000);
setInterval(changePosition, 5000);

function changeColor() {
    var circle = document.getElementById("circle");
    var color = getRandomColor();
    circle.style.backgroundColor = color;
}

function changePosition() {
    var circle = document.getElementById("circle");
    var x = Math.floor(Math.random() * 700);
    var y = Math.floor(Math.random() * 300);
    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
