const inputCalc = document.querySelector(".account"),
    resultCalc = document.querySelector(".result");

function input(i) {
    inputCalc.value = inputCalc.value + i;
}

function result() {
    if (eval(inputCalc.value) == undefined) {
        resultCalc.value = '0,00';
        inputCalc.value = '0,00';
    }
    if (eval(inputCalc.value) == Infinity) {
        resultCalc.value = '0,00';
        inputCalc.value = 'деление на ноль не допускается';
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}

// удалить число
function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1);
}

// очистить
function reset() {
    resultCalc.value = '';
    inputCalc.value = '';
}

var memory_plus = result();
function memory() {
    itog += memory_plus;
    console.log(itog);
}