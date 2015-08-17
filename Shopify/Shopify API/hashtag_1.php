<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Hashtag extends CI_Controller {

    private $SHOPIFY_API_KEY = '7ca2065de51b88c578533f9427f76337';
    private $SHOPIFY_SECRET = 'cb7812367739bd455b94ce44d4813e0d';

    public function __construct() {
        parent::__construct();
        $this->load->library('shopify');
        $this->load->model('hashtag_model');
        parse_str(substr($_SERVER['REQUEST_URI'], strpos($_SERVER['REQUEST_URI'], '?') + 1, strlen($_SERVER['REQUEST_URI']) - strpos($_SERVER['REQUEST_URI'], '?')), $_GET);
    }

    public function index() {
        $info['SHOPIFY_API_KEY'] = $this->SHOPIFY_API_KEY;
        $info['SHOPIFY_SECRET'] = $this->SHOPIFY_SECRET;
        $info['SHOPIFY_SCOPE'] = 'write_content, write_products, write_script_tags';

        if (isset($_GET['shop'])) {
            $shop = $this->hashtag_model->get($_GET['shop']);
            $data['info'] = '';

            $str = 'code=' . (isset($_GET['code']) ? $_GET['code'] : '') .
                    '&shop=' . (isset($_GET['shop']) ? $_GET['shop'] : '') .
                    '&timestamp=' . (isset($_GET['timestamp']) ? $_GET['timestamp'] : '');

            $hash = hash_hmac("sha256", $str, $info['SHOPIFY_SECRET']);

            $validation = ($hash == (isset($_GET['hmac']) ? $_GET['hmac'] : 'no hmac')) ? true : false;
            
            if (isset($_GET['shop']) && $shop != null && $validation) {

                $data['shop'] = $shop['name_shop'];
                $shopifyClient = new ShopifyClient($shop['name_shop'], $shop['token'], $info['SHOPIFY_API_KEY'], $info['SHOPIFY_SECRET']);
                
                $this->session->set_userdata(array("shop" => $data['shop']));
                
                $data['array'] = $this->hashtag_model->get_all('shop_' . $shop['id_shop']);
                $this->display_lib->hashtag('product_page', $data);
                
                return;
            }
        }

        if (isset($_GET['code'])) { 
            $shopifyClient = new ShopifyClient($_GET['shop'], "", $info['SHOPIFY_API_KEY'], $info['SHOPIFY_SECRET']);
            session_unset();
            
            $_SESSION['token'] = $shopifyClient->getAccessToken($_GET['code']);
            if ($_SESSION['token'] != '') {
                $_SESSION['shop'] = $_GET['shop'];

                $add['name_shop'] = $_GET['shop'];
                $add['token'] = $_SESSION['token'];
                $add['date'] = date('Y-m-d H:i:s');

                $shopifyClient = new ShopifyClient(
                        $add['name_shop'], 
                        $add['token'], 
                        $info['SHOPIFY_API_KEY'], 
                        $info['SHOPIFY_SECRET']);

                $shop_info = $shopifyClient->call('GET', 'admin/shop.json');
                $add['name_shop'] = $shop_info['myshopify_domain'];
                $add['email'] = $shop_info['email'];
                $add['domain'] = $shop_info['domain'];

                $table_name = 'shop_' . $this->hashtag_model->add_data($add);
                $info['SHOPIFY_SHOP'] = $add['name_shop'];
                $info['SHOPIFY_TOKEN'] = $add['token'];
                    
                $param['webhook'] = array(
                    'topic' => "app/uninstalled",
                    'address' => base_url() . 'hashtag/del_shop',
                    'format' => 'json'
                );
                $shopifyClient->call('POST', 'admin/webhooks.json', $param);

                $param['webhook'] = array(
                    'topic' => "products/create",
                    'address' => base_url() . 'hashtag/add_product/' . $add['name_shop'],
                    'format' => 'json'
                );
                $shopifyClient->call('POST', 'admin/webhooks.json', $param);

                $param['webhook'] = array(
                    'topic' => "products/update",
                    'address' => base_url() . 'hashtag/change_product/' . $add['name_shop'],
                    'format' => 'json'
                );
                $shopifyClient->call('POST', 'admin/webhooks.json', $param);

                $param['webhook'] = array(
                    'topic' => "products/delete",
                    'address' => base_url() . 'hashtag/delete_product/' . $add['name_shop'],
                    'format' => 'json'
                );
                $shopifyClient->call('POST', 'admin/webhooks.json', $param);

                $param['webhook'] = array(
                    'topic' => "collections/create",
                    'address' => base_url() . 'hashtag/collection/create/' . $add['name_shop'],
                    'format' => 'json'
                );
                $shopifyClient->call('POST', 'admin/webhooks.json', $param);
                $param['webhook'] = array(
                    'topic' => "collections/update",
                    'address' => base_url() . 'hashtag/collection/update/' . $add['name_shop'],
                    'format' => 'json'
                );
                $shopifyClient->call('POST', 'admin/webhooks.json', $param);
                $param['webhook'] = array(
                    'topic' => "collections/delete",
                    'address' => base_url() . 'hashtag/collection/delete/' . $add['name_shop'],
                    'format' => 'json'
                );
                $shopifyClient->call('POST', 'admin/webhooks.json', $param);

                $param['script_tag'] = array(
                    'event' => "onload",
                    'src' => base_url() . 'assets/js/hashtag/gwa.js'
                );
                $shopifyClient->call('POST', 'admin/script_tags.json', $param);

                //create new table for shop
                $this->hashtag_model->create_table($table_name);

                //get all product
                $limit = 200;
                $page = 0;
                $count_product = $shopifyClient->call('GET', '/admin/products/count.json');
                do {
                    $product = $shopifyClient->call('GET', "/admin/products.json?limit={$limit}&page={$page}&fields=id,image,title,handle");
                    $this->hashtag_model->add_products($product, $table_name);
                    $page = $page + $limit;
                } while ($page < $count_product);

                redirect('https://' . $_GET['shop'] . '/admin/apps/');
            }
            header("Location: index");
            exit;
        }
// if they posted the form with the shop name
        else if (isset($_POST['shop']) || isset($_GET['shop'])) {

            // Step 1: get the shopname from the user and redirect the user to the
            // shopify authorization page where they can choose to authorize this app
            $shop = isset($_POST['shop']) ? $_POST['shop'] : $_GET['shop'];
            $shopifyClient = new ShopifyClient($shop, "", $info['SHOPIFY_API_KEY'], $info['SHOPIFY_SECRET']);

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
            header("Location: " . $shopifyClient->getAuthorizeUrl($info['SHOPIFY_SCOPE'], $pageURL));
            exit;
        }

        $this->load->view('hashtag/install_view', array());
    }

    public function page($href = 'products') {
        $data = array();
        
        $data['info'] = '';
        $data['shop'] = $this->session->userdata('shop');
        $data['shop'] = $data['shop'] ? $data['shop'] : 'hotelspro.myshopify.com';
        $shop = $this->hashtag_model->get($data['shop']);
        $data['array'] = $this->hashtag_model->get_all('shop_' . $shop['id_shop']);


        switch ($href) {
            case 'collections':
                $data['page'] = $this->load->view('hashtag/' . $href . '_page_view', $data, true);
                break;
            case 'get_started':
                $data['page'] = $this->load->view('hashtag/' . $href . '_page_view', $data, true);
                break;
            default :
                $data['page'] = $this->load->view('hashtag/product_page_view', $data, true);
        }
        $data['status'] = true;

        echo json_encode($data);
        return;
    }

    public function update($id = null) {
        $this->form_validation->set_rules($this->hashtag_model->update_rules);
        $check = $this->form_validation->run();
        $data['message'] = '';
        $data['status'] = false;
        if ($check == TRUE && $id != null) {
            $shop = $this->hashtag_model->get($this->input->post('shop'));

            if (!empty($shop)) {
                header('Access-Control-Allow-Origin: ' . $this->server_http());
                header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
                header('Access-Control-Max-Age: 1000');
                header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
                $update = array(
                    'hashtag' => $this->input->post('hashtag'),
                    'showing' => $this->input->post('show') == 'false' ? 0 : 1
                );
                $table = 'shop_' . $shop['id_shop'];
                $product = $this->hashtag_model->get_product($id, $table);
                if ($product['hashtag'] != $update['hashtag']) {
                    $this->hashtag_model->delete_hashtag($product['id_hashtag'], $table . '_inst');
                    $this->hashtag_model->new_hashtag($product['id_hashtag'], $update['hashtag'], $table . '_inst');
                }
                $query = $this->hashtag_model->update_product($id, $update, $table);
                if ($query) {
                    $data['message'] = 'Good';
                    $data['status'] = true;
                } else {
                    $data['message'] = 'Not update!';
                    $data['status'] = false;
                }
            } else {
                $data['message'] = 'Not found shop!';
                $data['status'] = false;
            }
        } else {
            $data['message'] = validation_errors();
            $data['status'] = false;
        }
        echo json_encode($data);
        return;
    }

    public function search() {
        $this->form_validation->set_rules($this->hashtag_model->search_rules);
        $check = $this->form_validation->run();
        $data['message'] = '';
        $data['status'] = false;
        if ($check == TRUE) {
            $shop = $this->hashtag_model->get($this->input->post('shop'));
            if (!empty($shop)) {
                header('Access-Control-Allow-Origin: ' . $this->server_http());
                header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
                header('Access-Control-Max-Age: 1000');
                header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

                $search = $this->input->post('search');
                if (!empty($search)) {
                    $query = $this->hashtag_model->search($search, 'shop_' . $shop['id_shop']);
                } else {
                    $query = $this->hashtag_model->get_all('shop_' . $shop['id_shop']);
                }

                if ($query) {
                    $data['message'] = 'Good!';
                    $data['status'] = true;
                    $data['array'] = $this->display_lib->one(['array' => $query, 'shop' => $shop['name_shop']], 'hashtag/product');
                } else {
                    $data['message'] = 'Error!';
                    $data['status'] = false;
                }
            } else {
                $data['message'] = 'Not found shop!';
                $data['status'] = false;
            }
        } else {
            $data['message'] = validation_errors();
            $data['status'] = false;
        }
        echo json_encode($data);
        return;
    }

    public function get() {
        $this->form_validation->set_rules($this->hashtag_model->get_rules);
        $check = $this->form_validation->run();
        $data['message'] = '';
        $data['status'] = false;
        if ($check == TRUE) {
            $shop = $this->hashtag_model->get($this->input->post('shop'));
            if (!empty($shop)) {
                header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
                header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
                header('Access-Control-Max-Age: 1000');
                header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

                $this->load->model('super_api_model');
                $id = $this->input->post('id');
                $product = $this->hashtag_model->get_product($id, 'shop_' . $shop['id_shop']);
                if ($product['showing'] == 1) {
                    $data['hashtag'] = $product['hashtag'];
                    $data['status'] = true;
                    $data['inst'] = $this->hashtag_model->get_inst($id, 'shop_' . $shop['id_shop']);
                } else {
                    $data['status'] = false;
                }
                $data['message'] = 'work';

            } else {
                $data['message'] = 'Not found shop!';
                $data['status'] = false;
            }
        } else {
            $data['message'] = validation_errors();
            $data['status'] = false;
        }
        echo json_encode($data);
        return;
    }

    public function add_product($nameShop) {
        $webhookContent = "";

        $webhook2 = fopen('php://input', 'rb');
        while (!feof($webhook2)) {
            $webhookContent .= fread($webhook2, 4096);
        }
        fclose($webhook2);
        $message = '';
        $message = $message . $webhookContent;
        $prod = json_decode($message, true);

        $shop = $this->hashtag_model->get($nameShop);
        $table_name = 'shop_' . $shop['id_shop'];
        $info['SHOPIFY_API_KEY'] = $this->SHOPIFY_API_KEY;
        $info['SHOPIFY_SECRET'] = $this->SHOPIFY_SECRET;
        $shopifyClient = new ShopifyClient($shop['name_shop'], $shop['token'], $info['SHOPIFY_API_KEY'], $info['SHOPIFY_SECRET']);
        $data = $shopifyClient->call('GET', '/admin/products/' . $prod['id'] . '.json?fields=id,image,title,handle');

        $product['id'] = $data['id'];
        $product['title'] = $data['title'];
        $product['handle'] = $data['handle'];
        $product['image'] = $data['image']['src'];

        $this->hashtag_model->add_product($product, $table_name);
    }

    public function change_product($nameShop) {
        $webhookContent = "";

        $webhook2 = fopen('php://input', 'rb');
        while (!feof($webhook2)) {
            $webhookContent .= fread($webhook2, 4096);
        }
        fclose($webhook2);
        $message = '';
        $message = $message . $webhookContent;
        $prod = json_decode($message, true);

        mail('alex.brilin@gmail.com', 'test', $message);

        $shop = $this->hashtag_model->get($nameShop);
        $table_name = 'shop_' . $shop['id_shop'];
        $info['SHOPIFY_API_KEY'] = $this->SHOPIFY_API_KEY;
        $info['SHOPIFY_SECRET'] = $this->SHOPIFY_SECRET;
        $shopifyClient = new ShopifyClient($shop['name_shop'], $shop['token'], $info['SHOPIFY_API_KEY'], $info['SHOPIFY_SECRET']);
        $data = $shopifyClient->call('GET', '/admin/products/' . $prod['id'] . '.json?fields=id,image,title,handle');

        $product['id'] = $data['id'];
        $product['title'] = $data['title'];
        $product['handle'] = $data['handle'];
        $product['image'] = $data['image']['src'];

        $this->hashtag_model->change_product($prod['id'], $table_name, $product);
    }

    public function delete_product($nameShop) {
        $webhookContent = "";

        $webhook2 = fopen('php://input', 'rb');
        while (!feof($webhook2)) {
            $webhookContent .= fread($webhook2, 4096);
        }
        fclose($webhook2);
        $message = '';
        $message = $message . $webhookContent;
        $prod = json_decode($message, true);

        $shop = $this->hashtag_model->get($nameShop);
        $table_name = 'shop_' . $shop['id_shop'];

        $this->hashtag_model->delete_product($prod['id'], $table_name);
    }

    public function update_hashtag($id_product = 2) {
        $shop = $this->hashtag_model->get($this->input->post('shop'));

        if (!empty($shop)) {
            header('Access-Control-Allow-Origin: ' . $this->server_http());
            header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
            header('Access-Control-Max-Age: 1000');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

            $table = 'shop_' . $shop['id_shop'];
            $product = $this->hashtag_model->get_product($id_product, $table);
            $this->hashtag_model->delete_hashtag($product['id_hashtag'], $table . '_inst');
            $this->hashtag_model->new_hashtag($product['id_hashtag'], $product['hashtag'], $table . '_inst');

            $data['message'] = 'Good';
            $data['status'] = true;
        } else {
            $data['message'] = 'Not found shop!';
            $data['status'] = false;
        }
        echo json_encode($data);
        return;
    }

    public function del_shop() {
        $webhook = fopen('php://input', 'rb');
        while (!feof($webhook)) {
            $webhookContent .= fread($webhook, 4096);
        }
        fclose($webhook);
        $shop = json_decode($webhookContent, true);
        $shop = $this->hashtag_model->delete($shop['myshopify_domain']);
        $this->hashtag_model->delete_table('shop_' . $shop['id_shop']);
        $this->hashtag_model->delete_table('shop_' . $shop['id_shop'] . '_inst');
    }

    private function server_http() {
        $referrer = null;
        if (isset($_SERVER['HTTP_REFERER'])) {
            $referrer = $_SERVER['HTTP_REFERER'];
            return $referrer;
        } elseif (isset($_SERVER['HTTP_ORIGIN'])) {
            $referrer = $_SERVER['HTTP_ORIGIN'];
            return $referrer;
        }
        if ($referrer !== null) {
            $refDomain = Some_Helper::getInstance()->getAuthorizedReferrer($referrer);
            if ($refDomain !== null) {
                error_log($refDomain);
                return $refDomain;
            }
        }
    }

}
