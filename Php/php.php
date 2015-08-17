<?php

//1. вывод переменной в строке *обязательно в двайных кавычках
$beer = 'one';
echo "He drank some {$beer}s"; // He drank some ones
//
//2. Конкантинация строки
$a = "Hello ";
$a .= "World!"; // $a = "Hello World!"
// 
//3. Массив, его заполнение 
$arr = Array('key3' => 'val3', 'Чипсы');
$arr[] = 'Банан';
print_r($arr); // Array([key3]=>'val3',[1]=>'Чипсы',[0]=>'Банан')
//
//4. Типы переменных
//intval() - возвращает аргумент в виде целого числа integer 
//floatval() - возвращает аргумент в виде дробного числа float 
//strval() - возвращает аргумент в виде строки string 
//settype() - превращает первый аргумент в указанный во втором аргументе тип
//settype($a,'integer') Превратит $a в целое число. 
//ДОПУСТИМЫЕ -   "boolean", "integer" (или "int"), "float" ,"string", "array", "object", "null" 
//
//5. Условие в строку
$sName = 'Alex';
$result = $sName == "EuGen" ? "Я" : "Не я";
//Аналогично
if ($sName == "EuGen") {
    $result = "Я";
} else {
    $result = "Не я";
}

//6. Вложенные операторы выхода/продолжения
//break(2); -выйдет из двух цыклов
//continue; - продолжит цикл, закончив итерацию
//7. FOREACH
foreach ($arr as $key => $value) {
    echo("Элемент массива '" . $key . "' равен: " . $value . "\n");
}

//8. Передача по ссылке в функцию
function func(&$var1, &$var2) {
    $res = $var1 + $var2;
    $var2 = $var2 * 2;
    $var1 = $var1 * $var2;
    return $res;
}

$с = 3;
$b = 4;
echo func($с, $b); // 7
echo $с; // 12
echo $b; //8
//
//9. работа  с файлами 
chdir('/usr/tmp');
$src = fopen('f1.txt', 'r'); // 'r' указывает функции открыть файл для чтения
$dst = fopen('f2.txt', 'w'); // 'w' указывает функции открыть файл для записи
while (!feof($src)) {
    $line = fgets($src, 16);
    $line++;
    fputs($dst, $line);
}
fclose($dst);
fclose($src);
//stat() - Получает информацию о файле(дата создания, владелец) в виде массива.
//lstat() - Получает информацию о файле или символической ссылке
//file_exists() - Проверяет, существует ли файл или директория
//is_writable() - Проверяет возможность записи в файл
//is_readable() - Проверяет возможность чтения из файла
//is_executable() - Выясняет, является файл выполнимым
//filectime(), fileatime(), filemtime(), fileinode(), filegroup(), fileowner(), filesize(), filetype(), fileperms() - 
//10. CURL 
$ch = curl_init('http://php.su/forum/loginout.php');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_NOBODY, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, 'action=login&imembername=valenok&ipassword=ne_skaju&submit=%C2%F5%EE%E4');
curl_setopt($ch, CURLOPT_COOKIEJAR, "my_cookies.txt");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_exec($ch);
curl_close($ch);

//11. Цикл ПЕРВЫЙ И ПОСЛЕДНИЙ ЭЛЕМЕНТ
$array = array('a', 'b', 'c', 'd', 'e', 'f');
foreach ($array as $i) {
    if ($i == reset($array)) {
// Первый элемент цикла
    } elseif ($i == end($array)) {
// Последний элемент цикла
    } else {
// Остальные элементы
    }
}