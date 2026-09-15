let size = 200;
let colorIndex = 0;
const colors = ["red", "green", "blue"];

$(document).ready(function() {
    $("#balloon").click(function() {
        size += 10;
        colorIndex++;

        if (size > 420) {
            size = 200;
            colorIndex = 0;
        }

        if (colorIndex >= colors.length) {
            colorIndex = 0;
        }

        $(this).css({
            "width": size + "px",
            "height": size + "px",
            "background-color": colors[colorIndex]
        });
    });

    $("#balloon").mouseleave(function() {
        if (size > 200) {
            size -= 5;
        }

        colorIndex--;
        if (colorIndex < 0) {
            colorIndex = colors.length - 1;
        }

        $(this).css({
            "width": size + "px",
            "height": size + "px",
            "background-color": colors[colorIndex]
        });
    });
});
