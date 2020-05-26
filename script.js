var input = document.getElementById("input");
//number
function number(e) {
    var number_button;
    e = e || window.event;
    var el = e.target || e.srcElement;
    
    if(el.id == "button_zero") {
        number_button = 0;
    }
    else if(el.id == "button_one") {
        number_button = 1;
    }
    else if(el.id == "button_two") {
        number_button = 2;
    }
    else if(el.id == "button_three") {
        number_button = 3;
    }
    else if(el.id == "button_four") {
        number_button = 4;
    }
    else if(el.id == "button_five") {
        number_button = 5;
    }
    else if(el.id == "button_six") {
        number_button = 6;
    }
    else if(el.id == "button_seven") {
        number_button = 7;
    }
    else if(el.id == "button_eight") {
        number_button = 8;
    }
    else if(el.id == "button_nine") {
        number_button = 9;
    }
    answer(number_button);
}

//сохранение значений
var example = "";

//добавление значения в массив
function answer(x) {
    example += x;
    //вывод
    input.value = example;
}

function operations() {}
