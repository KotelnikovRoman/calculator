var input = document.getElementById("input");
//number
function number(e) {
    var number_button;
    e = e || window.event;
    var el = e.target || e.srcElement;

    if (el.id == "btn_zero") {
        number_button = 0;
    }
    else if (el.id == "btn_one") {
        number_button = 1;
    }
    else if (el.id == "btn_two") {
        number_button = 2;
    }
    else if (el.id == "btn_three") {
        number_button = 3;
    }
    else if (el.id == "btn_four") {
        number_button = 4;
    }
    else if (el.id == "btn_five") {
        number_button = 5;
    }
    else if (el.id == "btn_six") {
        number_button = 6;
    }
    else if (el.id == "btn_seven") {
        number_button = 7;
    }
    else if (el.id == "btn_eight") {
        number_button = 8;
    }
    else if (el.id == "btn_nine") {
        number_button = 9;
    }
    answer(number_button);
}

//операторы
function operators(e) {
    var operator;
    e = e || window.event;
    var el = e.target || e.srcElement;

    if (el.id == "btn_plus") {
        operator = "+";
    }
    else if (el.id == "btn_minus") {
        operator = "-";
    }
    else if (el.id == "btn_multiply") {
        operator = "X";
    }
    else if (el.id == "btn_divide") {
        operator = "/";
    }
    else if (el.id == "btn_result") {
        operator = "=";
    }
    else {
        operator = "undefined";
    }

    answer(operator);
}

//сохранение значений
var example = "";

function clear_input() {
    example = "";
    input.value = example;
    //alert("hello");
}

//добавление значения в массив
function answer(x) {
    example += x;
    //вывод
    input.value = example;
}
