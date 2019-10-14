const summ = bishopSteps([]);
function bishopSteps() {
    let x, y, k, z;
    x = 3;
    y = 2;
    k = 2;
    z = 3;

    if (x === k && y === z) {
        console.log('Введите разные поля!');
    }
    else if ((x - k === y - z) || (x - k === -(y - z))) {
        console.log('Можно ходить!');
    }
    else {
        console.log('Ходов нет!');
    }
}