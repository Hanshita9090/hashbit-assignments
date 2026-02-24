function calculate(operator) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").innerText = "Result: Please enter valid numbers";
        return;
    }

    if (operator === '+') {
        result = n1 + n2;
    } 
    else if (operator === '-') {
        result = n1 - n2;
    } 
    else if (operator === '*') {
        result = n1 * n2;
    } 
    else if (operator === '/') {
        if (n2 === 0) {
            document.getElementById("result").innerText = "Result: Cannot divide by zero";
            return;
        }
        result = n1 / n2;
    }

    document.getElementById("result").innerText = "Result: " + result;
}