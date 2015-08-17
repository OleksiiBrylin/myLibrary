<?php
$SHOPIFY_API_KEY = 'b249c229d500596da333c2601d7c7348';
$SHOPIFY_SECRET = '586e17d8680a6387cb184e1db4ec983e';
$SHOPIFY_SCOPE = 'write_themes, write_script_tags';
//$SHOPIFY_SCOPE = 'read_script_tags';
$src = "//system.picreel.com/js/jstracker.min.js";
$src_position_js = "//system.picreel.com/js/add.js";

require 'shopify.php';
if (isset($_GET['code'])) { // if the code param has been sent to this page... we are in Step 2
    // Step 2: do a form POST to get the access token
    $shopifyClient = new ShopifyClient($_GET['shop'], "", $SHOPIFY_API_KEY, $SHOPIFY_SECRET);
    session_unset();

    // Now, request the token and store it in your session.
    $_SESSION['token'] = $shopifyClient->getAccessToken($_GET['code']);
    if ($_SESSION['token'] != '') {
        $_SESSION['shop'] = $_GET['shop'];

        $method = 'GET';
        $path = 'admin/script_tags.json';
        $shopifyClient = new ShopifyClient($_GET['shop'], $_SESSION['token'], $SHOPIFY_API_KEY, $SHOPIFY_SECRET);
        $param['script_tag'] = array('list' => "250");
        $temp = $shopifyClient->call($method, $path,$param);
        $flag = 0;
        $flag_move = 0;
        foreach ($temp as $js_script) {
            if ($js_script['src'] == $src){
                $flag = 1;
            }             
        }

        if (!$flag){
            $method = 'POST';
            $path = '/admin/script_tags.json';
            $param['script_tag'] = array('event' => "onload", "src" => $src);
            //$shopifyClient = new ShopifyClient($_GET['shop'], $_SESSION['token'], $SHOPIFY_API_KEY, $SHOPIFY_SECRET);
            $temp1 = $shopifyClient->call($method, $path, $param); 
        }


        $location = "Location: http://system.picreel.com/auth/login?shop=" . $_GET['shop'];
        echo header($location);
        exit;
    }

    //echo header($location);
    //exit;

    //header("Location: index.php");
    //exit;
}
// if they posted the form with the shop name
else if (isset($_POST['shop']) || isset($_GET['shop'])) {   
    // Step 1: get the shopname from the user and redirect the user to the
    // shopify authorization page where they can choose to authorize this app
    $shop = isset($_POST['shop']) ? $_POST['shop'] : $_GET['shop'];
    $shopifyClient = new ShopifyClient($shop, "", $SHOPIFY_API_KEY, $SHOPIFY_SECRET);

    // get the URL to the current page
    $pageURL = 'http';
    if ($_SERVER["HTTPS"] == "on") {
        $pageURL .= "s";
    }
    $pageURL .= "://";
    if ($_SERVER["SERVER_PORT"] != "80") {
        $pageURL .= $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . $_SERVER["REQUEST_URI"];
    } else {
        $pageURL .= $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
    }

    // redirect to authorize url
    header("Location: " . $shopifyClient->getAuthorizeUrl($SHOPIFY_SCOPE, $pageURL));
    exit;
}

// first time to the page, show the form below
?>
<p>Install this app in a shop to get access to its private admin data.</p> 

<p style="padding-bottom: 1em;">
    <span class="hint">Don&rsquo;t have a shop to install your app in handy? <a href="https://app.shopify.com/services/partners/api_clients/test_shops">Create a test shop.</a></span>
</p> 

<form action="http://enact.ca/picreel_app/" method="post">
    <label for='shop'><strong>The URL of the Shop</strong> 
        <span class="hint">(enter it exactly like this: my-own-site.myshopify.com)</span> 
    </label> 
    <p> 
        <input id="shop" name="shop" size="45" type="text" value="" /> 
        <input name="commit" type="submit" value="Install" /> 
    </p> 
</form>

