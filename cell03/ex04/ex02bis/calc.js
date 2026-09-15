$(document).ready(function() {
    $("#btn").click(function() {
        const leftVal = $("#left").val().trim();
        const rightVal = $("#right").val().trim();
        const op = $("#op").val();

        const numRegex = /^\d+$/;
        if (!numRegex.test(leftVal) || !numRegex.test(rightVal)) {
            alert("Error :(");
            return;
        }

        const a = parseInt(leftVal, 10);
        const b = parseInt(rightVal, 10);

        if ((op === "/" || op === "%") && b === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result = 0;
        if (op === "+") result = a + b;
        else if (op === "-") result = a - b;
        else if (op === "*") result = a * b;
        else if (op === "/") result = a / b;
        else if (op === "%") result = a % b;

        alert(result);
        console.log(result);
    });

    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});
