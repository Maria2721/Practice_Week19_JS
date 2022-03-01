function calcMathShort(str) {
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let numbers = new Calculator(number1, number2);

    let result =
        (str === 'sum') ? Calculator.sum(numbers) :
        (str === 'sub') ? Calculator.sub(numbers) :
        (str === 'mult') ? Calculator.mult(numbers) :
        (str === 'div' && number2 != 0) ? Calculator.div(numbers) : 'На ноль делить нельзя!';

    document.querySelector('#calcResult').innerHTML = `${result}`;
}

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    static sum(numbers) {
        return numbers.num1 + numbers.num2;
    }
    static sub(numbers) {
        return numbers.num1 - numbers.num2;
    }
    static mult(numbers) {
        return numbers.num1 * numbers.num2;
    }
    static div(numbers) {
        return numbers.num1 / numbers.num2;
    }
}