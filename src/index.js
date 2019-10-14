const summ1 = chetNeChet([]);
function chetNeChet() {
    let a = 'abcd';
    let b = 'cbad';

    if (a.length !== b.length) {
        console.log('Разная длинна строк!');
    }
    else if (a === b) {
        console.log('Одинаковые строки!');
    }
    else {
        for (let i = 0, j = 0; i <= a.length - 1;) {
            if ( a === b ) {
                console.log('yes');
            }
            else if (a[i] === b[j]) {
                [b[i], b[j]] = [b[j], b[i]];
                i++;
                j = i;
            }
            else if ((a[i] !== b[j]) && ((j === b.length) || (j === b.length - 1)) ) {
                console.log('No-o-o-o-o');
            }
            else if ( a[i] !== b[i]) {
                j=+2;
            }
        }
    }
}