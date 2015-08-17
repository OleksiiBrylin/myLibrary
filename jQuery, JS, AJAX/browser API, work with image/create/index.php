<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    exit(0);
}


define(BASEPATH, 'http://create.livvo.net/');

error_reporting(E_ALL | E_STRICT);
require('UploadHandler.php');
$options = array(
    'image_versions' => array(
        '' => array('auto_orient' => false)
    ),
    'print_response' => false,
    'accept_file_types' => '/\.(jpe?g|png)$/i'
);
$upload_handler = new UploadHandler($options);


$ansver['status'] = false;
$info = $upload_handler->get_response();

$obj = (array) $info['files'][0];
if (isset($obj['error'])) {
    $ansver['error'] = $obj['error'];
    echo json_encode($ansver);
    return;
}

$timestamp = time();
if (is_dir('files/' . $timestamp)) {
    
} else {
    if (!mkdir('files/' . $timestamp, 0777, true)) {
        die('error');
    }
}
$old_path = 'files/' . $obj['name'];
$new_path = 'files/' . $timestamp . '/' . $obj['name'];
rename($old_path, $new_path);

$ansver['img'] = BASEPATH . $new_path;

//$box_width = 500;
//$box_height = 571;
//$rotation = 45;
//$new_height = 500;
//$new_width = 500;
//$position_top = 50;
//$position_left = 150;

$box_width = $_POST['box_width'];
$box_height = $_POST['box_height'];
$rotation = $_POST['img_rotation'];
$new_height = $_POST['img_new_height'];
$new_width = $_POST['img_new_width'];
$position_top = $_POST['img_top'];
$position_left = $_POST['img_left'];
$color = '#ffffff';
$leggins_path = 'opa6.png';
$file_path_new = 'files/' . $timestamp . '/thumb-' . $timestamp . '.jpg';
$logo_path = 'logo.png';

//namespace abeautifulsite;
//use Exception;

require 'SimpleImage.php';


try {
    ini_set('memory_limit', '-1');
    $center_layer_2 = array(
        "top" => $position_top + $new_height / 2,
        "left" => $position_left + $new_width / 2,
    );

    $path_layer_1 = 'layer1.png';

    $layer_1 = new SimpleImage();
    $layer_1->create($box_width, $box_height, $color)->save($path_layer_1);

    $layer_2 = new SimpleImage();
    $original = $layer_2->load($new_path)->get_original_info();
    $layer_2->resize($new_width, $new_height)->rotate($rotation, $color);

    $x_offset_l2 = $center_layer_2['left'] - $layer_2->get_width() / 2;
    $y_offset_l2 = $center_layer_2['top'] - $layer_2->get_height() / 2;

    $layer_1 = new SimpleImage();
    $layer_1->load($path_layer_1)->overlay($layer_2, 'top left', 1, $x_offset_l2, $y_offset_l2);


    $layer_3 = new SimpleImage();
    $layer_3->load($leggins_path)->resize($box_width, $box_height);

    $layer_4 = new SimpleImage();
    $layer_4->load($logo_path)->fit_to_width($box_width * 0.33);

    $layer_1->overlay($layer_3, 'top left', 1)
//            ->overlay($layer_4, 'top left', 0.3, 20, 20)
//            ->overlay($layer_4, 'top right', 0.3, -20, 20)
            ->overlay($layer_4, 'bottom left', 0.7, 90, -30)
//            ->overlay($layer_4, 'bottom right', 0.3, -20, -20)
//            ->overlay($layer_4, 'center', 0.5)
            ->save($file_path_new);

    $ansver['status'] = true;
} catch (Exception $e) {
    $ansver['status'] = false;
    $ansver['error'] = $e->getMessage();
}

$ansver['img_new'] = BASEPATH . $file_path_new;
$ansver['info'] = "$box_width|$box_height|{$_POST['img_rotation']}|$new_height|$new_width|$position_top|$position_left";

$ansver['timestamp'] = $timestamp;

// histori
if ($ansver['status']) {
    $f = fopen("history.json", "a");
    fwrite($f, ", \n" . json_encode($ansver));
    fclose($f);

    try {
        $text = json_encode($ansver);

        $fp = fopen('files/' . $timestamp . '/'.$timestamp.".json", "w");
        fwrite($fp, $text);
        fclose($fp);
        
    } catch (Exception $e) {
        $ansver['status'] = false;
        $ansver['error'] = $e->getMessage();
    }
}
$ansver['POST'] = $_POST;
//try {
//    if ($ansver['status']) {
//        shopify_page($ansver);
//    }
//} catch (Exception $e) {
//    $ansver['error'] = $e->getMessage();
//}

echo json_encode($ansver);

return;

function shopify_page($array) {
    $box = "<div class='col-xs-3 q_box' ><img src='" . $array['img_new'] . "' alt='Design Your Own!()' data-img='" . $array['img'] . "' data-info='" . $array['info'] . "' /></div>";
    $SHOPIFY_API_KEY = 'ede3c89120e158a44047759929063466';
    $SHOPIFY_SECRET = '29f17587e88a394647b5c27b73557199';
    $SHOPIFY_SCOPE = 'write_content, write_themes';
    $token = '8f171482b9691f0578ccf0a2260402b2';
    $SHOPIFY_SHOP = 'livvo-yoga.myshopify.com';
    $page = '20076480';

    require 'shopify_lib.php';

    $shopifyClient = new ShopifyClient($SHOPIFY_SHOP, $token, $SHOPIFY_API_KEY, $SHOPIFY_SECRET);
    $data = $shopifyClient->call('GET', "/admin/pages/$page.json");
    $message = $data['body_html'];
    $message .= $box;


    print_r($message);
    $param = array(
        'page' => array(
            'id' => $page,
            'body_html' => $message
        )
    );
    $new = $shopifyClient->call('PUT', "/admin/pages/$page.json", $param);
}

function createcolor($r, $g, $b) {
    return hexdec(str_pad(dechex($r), 2, 0, STR_PAD_LEFT) . str_pad(dechex($g), 2, 0, STR_PAD_LEFT) . str_pad(dechex($b), 2, 0, STR_PAD_LEFT));
}

function imagecreatefromfile($filename) {
    if (!file_exists($filename)) {
        throw new InvalidArgumentException('File "' . $filename . '" not found.');
    }
    switch (strtolower(pathinfo($filename, PATHINFO_EXTENSION))) {
        case 'jpeg':
        case 'jpg':
            return imagecreatefromjpeg($filename);
            break;

        case 'png':
            return imagecreatefrompng($filename);
            break;

        case 'gif':
            return imagecreatefromgif($filename);
            break;

        default:
            throw new InvalidArgumentException('File "' . $filename . '" is not valid jpg, png or gif image.');
            break;
    }
}
