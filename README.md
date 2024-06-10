<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Ли Альбина Тевоновна</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №10. «JS»</strong><br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

<h1 align = "center">Введение</h1>

<p><b>Веб-разработка</b> — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются: </p>

<ul>
<li>Проектирование сайта или веб-приложения (сбор и анализ требований, разработка технического задания, проектирование интерфейсов);</li>
<li>Создание дизайн-концепции сайта;</li>
<li>Создание страниц;</li>
<li>Программирование;</li>
<li>Оптимизация и размещение материалов сайта;</li>
<li>Тестирование и внесение корректировок;</li>
<li>Публикация проекта на хостинге;</li>
<li>Обслуживание работающего сайта.</li>
</ul>

<br>

<h1 align = "center">Цели и задачи</h1>


<p>Цель: ознакомиться с принципами работы в JavaScript.</p>

<p>Задачи:</p>

<ul>
<li>Изучить синтаксис JavaScript</li>
<li>Научиться форматированию элементов c подключением скриптов</li>
</ul>

<p></p>

<h1 align = "center">Решение</h1>

<p>Для выполнения этой лабораторной работы, я пользовалась лекционным материалом и интернет-ресурсами для поиска решений задач оформления и для поиска медиаресурсов:</p>

<ul>
<li><a href="https://youtube.com/">YouTube</a></li>
<li><a href="https://stackoverflow.com/">Stack Overflow</a></li>
</ul>

<p>Примеры кода:</p>
<code>function f2(str, str2) {
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
function f4() {
    for (let i = 0; i < 7; i++) {
        let str = '';
        for (let j = 0; j <= i; j++) {
            str += '#';
        }
        console.log(str + '\n');
    }
}
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
function min(n1, n2) {
    let n3;
    if (n1 > n2) n3 = n2;
    else n3 = n1; 
    console.log('min(' + n1 + ', ' + n2 + ') -> ' + n3);
}
function isEven(N) {
    if (N < 0) N *= -1;
    if (N == 0) return true;
    if (N == 1) return false;
    return isEven(N - 2);
}
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
}</code>
</br></br>
<h1 align = "center">Вывод</h1>
<p>В результате проделанной лабораторной работы, я познакомилась с новыми элементами языка JavaScript и попрактиковалась в решении задач.</p>
