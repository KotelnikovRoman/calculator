const output = document.querySelector('output');
const div = document.createElement('div');
div.classList.add('keyboard');
document.querySelector('.calculator').appendChild(div);

// разделителем служит пустая строка
// можно было бы обойтись без пробелов, если бы у нас не было "CE"
'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ')

    // пробегаемся по массиву
    // для каждого символа
    // создаем кнопку с помощью строкового литерала
    // записываем значение символа в атрибут "value" кнопки
    .map(symbol => {
        div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
    });