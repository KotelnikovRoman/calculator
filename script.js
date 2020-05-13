/** ввод и результат */
var result = document.getElementById("result");
var input = document.getElementById("input").value = "";

/** числа */
var button_one = document.getElementById("button_one");
var button_two = document.getElementById("button_two");
var button_three = document.getElementById("button_three");
var button_four = document.getElementById("button_four");
var button_five = document.getElementById("button_five");
var button_six = document.getElementById("button_six");
var button_seven = document.getElementById("button_seven");
var button_eight = document.getElementById("button_eight");
var button_nine = document.getElementById("button_nine");
var button_zero = document.getElementById("button_zero");

/** операторы */
var button_plus = document.getElementById("button_plus");   // +
var button_minus = document.getElementById("button_minus"); // -
var button_multiply = document.getElementById("button_multiply");   // *
var button_divide = document.getElementById("button_divide");   // /
var button_equal = document.getElementById("button_equal"); // =

function number() {
    /** */
}

function display() {
    /*
    input = 354.7;
    result.innerHTML = input;
    */
}

/** определяем какая кнопка нажата */
function name_button(e) {
    e = e || window.event;
    var el = e.target || e.srcElement;
    alert(el.id);
}

display();

