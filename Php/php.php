<?php

//1. ����� ���������� � ������ *����������� � ������� ��������
$beer = 'one';
echo "He drank some {$beer}s"; // He drank some ones
//
//2. ������������� ������
$a = "Hello ";
$a .= "World!"; // $a = "Hello World!"
// 
//3. ������, ��� ���������� 
$arr = Array('key3' => 'val3', '�����');
$arr[] = '�����';
print_r($arr); // Array([key3]=>'val3',[1]=>'�����',[0]=>'�����')
//
//4. ���� ����������
//intval() - ���������� �������� � ���� ������ ����� integer 
//floatval() - ���������� �������� � ���� �������� ����� float 
//strval() - ���������� �������� � ���� ������ string 
//settype() - ���������� ������ �������� � ��������� �� ������ ��������� ���
//settype($a,'integer') ��������� $a � ����� �����. 
//���������� -   "boolean", "integer" (��� "int"), "float" ,"string", "array", "object", "null" 
//
//5. ������� � ������
$sName = 'Alex';
$result = $sName == "EuGen" ? "�" : "�� �";
//����������
if ($sName == "EuGen") {
    $result = "�";
} else {
    $result = "�� �";
}

//6. ��������� ��������� ������/�����������
//break(2); -������ �� ���� ������
//continue; - ��������� ����, �������� ��������
//7. FOREACH
foreach ($arr as $key => $value) {
    echo("������� ������� '" . $key . "' �����: " . $value . "\n");
}

//8. �������� �� ������ � �������
function func(&$var1, &$var2) {
    $res = $var1 + $var2;
    $var2 = $var2 * 2;
    $var1 = $var1 * $var2;
    return $res;
}

$� = 3;
$b = 4;
echo func($�, $b); // 7
echo $�; // 12
echo $b; //8
//
//9. ������  � ������� 
chdir('/usr/tmp');
$src = fopen('f1.txt', 'r'); // 'r' ��������� ������� ������� ���� ��� ������
$dst = fopen('f2.txt', 'w'); // 'w' ��������� ������� ������� ���� ��� ������
while (!feof($src)) {
    $line = fgets($src, 16);
    $line++;
    fputs($dst, $line);
}
fclose($dst);
fclose($src);
//stat() - �������� ���������� � �����(���� ��������, ��������) � ���� �������.
//lstat() - �������� ���������� � ����� ��� ������������� ������
//file_exists() - ���������, ���������� �� ���� ��� ����������
//is_writable() - ��������� ����������� ������ � ����
//is_readable() - ��������� ����������� ������ �� �����
//is_executable() - ��������, �������� ���� ����������
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

//11. ���� ������ � ��������� �������
$array = array('a', 'b', 'c', 'd', 'e', 'f');
foreach ($array as $i) {
    if ($i == reset($array)) {
// ������ ������� �����
    } elseif ($i == end($array)) {
// ��������� ������� �����
    } else {
// ��������� ��������
    }
}