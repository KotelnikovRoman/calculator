/** ввод и результат */
var result = document.getElementById("result");
var input = document.getElementById("input");

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


/** определяем какая кнопка нажата */
var name = "";
function name_button(e) {
    e = e || window.event;
    el = e.target || e.srcElement;
    //id кнопки
    name = el.id;
    number()
}

function number() {
    if(name == "button_zero") {
        input.value += "0";
    }
    else if(name == "button_one") {
        input.value += "1";
    }
    else if(name == "button_two") {
        input.value += "2";
    }
    else if(name == "button_three") {
        input.value += "3";
    }
    else if(name == "button_four") {
        input.value += "4";
    }
    else if(name == "button_five") {
        input.value += "5";
    }
    else if(name == "button_six") {
        input.value += "6";
    }
    else if(name == "button_seven") {
        input.value += "7";
    }
    else if(name == "button_eight") {
        input.value += "8";
    }
    else if(name == "button_nine") {
        input.value += "9";
    }
}

function display() {
    name = name_button();
    /*
    input = 354.7;
    result.innerHTML = input;
    */
   alert(name);
}

window.onclick = name_button;