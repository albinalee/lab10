function f1(N, array) {
    let res = [];
    array.forEach(element => {
        if (element % N == 0) {
            res.push(element);
        }
    });
    console.log(res + ' can be divided by ' + N);
}
f1(6, [1, 36, 3, 12, 7, 24]);

function f2(str, str2) {
    let res;
    sstr1 = str.toLowerCase().replaceAll(/[^a-zA-Z]/g, '').split('').sort().join('');
    sstr2 = str2.toLowerCase().replaceAll(/[^a-zA-Z]/g, '').split('').sort().join('');
    if (sstr1 == sstr2) {
        res = true;
    } else {
        res = false;
    }
    console.log(str + ' <-> ' + str2 + ' -> ' + res);
}
f2('apple', 'orange');
f2('tr ia,ng.le!', 'in,teg ral');

function f3(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let N = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (str[i] == vowel[j]) {
                N++;
                break;
            }
        }
    }
    console.log(`${str} -> ${N} vowels`);
}
f3('apple');

function f4() {
    for (let i = 0; i < 7; i++) {
        let str = '';
        for (let j = 0; j <= i; j++) {
            str += '#';
        }
        console.log(str + '\n');
    }
}
f4();

function f5() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            console.log('Fizz');
        } else if (i % 5 == 0 && i % 3 != 0) {
            console.log('Buzz');
        } else if (i % 5 == 0 && i % 3 == 0) {
            console.log('FizzBuzz');
        } else {
            console.log(i);
        }
    }
}
f5();

function f6() {
    let str = '';
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 8; j++) {
            str += '# ';
        }
        str += '\n';
    }
    for (let i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < 8; j++) {
                if (j % 2 == 0) {
                    str += '□ ';
                } else {
                    str += '■ ';
                }
            }
        } else {
            for (let j = 0; j < 8; j++) {
                if (j % 2 == 1) {
                    str += '□ ';
                } else {
                    str += '■ ';
                }
            }
        }
        str += '\n';
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 8; j++) {
            str += '# ';
        }
        str += '\n';
    }
    console.log(str);
}
f6();

function min(n1, n2) {
    let n3;
    if (n1 > n2) n3 = n2;
    else n3 = n1; 
    console.log('min(' + n1 + ', ' + n2 + ') -> ' + n3);
}
min(123, -123);

function isEven(N) {
    if (N < 0) N *= -1;
    if (N == 0) return true;
    if (N == 1) return false;
    return isEven(N - 2);
}
console.log('isEven(50) -> ' + isEven(50));
console.log('isEven(75) -> ' + isEven(75));
console.log('isEven(-1) -> ' + isEven(-1));

function countBs(str) {
    countChar(str, 'B');
}
function countChar(str, c) {
    let res = 0;
    str = str.toLowerCase();    
    c = c.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] == c) {
            res++;
        }
    }
    console.log(str + ' > ' + c + ' -> ' + res);
}
countChar('apple', 'p');
countBs('banana');
countChar('orange', 'r');

function range(start, end, step) {
    let array = [];
    if (step == null) step = 1;
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    console.log('range(' + start + ', ' + end + ', ' + step + ') -> ' + array);
    return array;
}
function sum(array)
{
    let sum = 0;
    array.forEach (a => { sum += a; })
    return sum;
}
console.log(sum(range(1, 10)));
range(1, 10, 2);
range(5, 2, -1);

function reverseArray(array) {
    newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[array.length - i - 1]);
    }
    return newArray
}
function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let tmp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = tmp;
    }
    return array;
}
console.log('reverseArray([1, 3, 5, 7, 9]) -> ' + reverseArray([1, 3, 5, 7, 9]));
console.log('reverseArray([0, 2, 4, 6, 8]) -> ' + reverseArrayInPlace([0, 2, 4, 6, 8]));

let obj1 = {
    name: 'abc',
    value: 10
};
let obj2 = {
    name: 'abc',
    value: 10
};
function deepEqual(v1, v2) {
    if (v1 == null || v2 == null) {
        return false;
    }
    if (typeof v1 == 'object' && typeof v2 == 'object') {
        if (v1 === v2) {
            return true;
        } else {
            return false;
        }
    } else {
        if (v1 == v2) {
            return true;
        } else {
            return false;   
        }
   }
}
console.log('obj1 = obj1 : ' + deepEqual(obj1, obj1));
console.log('obj1 = obj2 : ' + deepEqual(obj1, obj2));
console.log('100 = \'100\' : ' + deepEqual(100, '100'));
console.log('100 = 100 : ' + deepEqual(100, 100));

function f13() {
    let matrix = [[1, 2], [3, 4], [5, 6], [7, 8]];
    let flatArray = matrix.reduce((total, row) => total.concat(row), []);
    console.log(flatArray);
}
f13();