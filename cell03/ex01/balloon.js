let size = 200;
let colorIndex = 0;
const colors = ["red", "green", "blue"];

const balloon = document.getElementById("balloon");

balloon.addEventListener("click", function() {
    size += 10;
    colorIndex++;

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    }

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});

balloon.addEventListener("mouseleave", function() {
    if (size > 200) {
        size -= 5;
    }

    colorIndex--;
    if (colorIndex < 0) {
        colorIndex = colors.length - 1;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});
