<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Hashtag_model extends CI_Model {

    public $table = 'shop'; //имя таблицы
    public $idkey = 'name_shop'; //имя ID  
    public $DbHash;

    public function __construct() {
//        $this->active_group = 'hashtag';
        $this->DbHash = $this->load->database('hashtag', TRUE, TRUE);
        $this->load->dbforge();
    }

    public $update_rules = array(
        array
            (
            'field' => 'hashtag',
            'label' => 'HashTag',
            'rules' => 'required|xss_clean|max_length[100]'
        ),
        array
            (
            'field' => 'show',
            'label' => 'Show',
            'rules' => 'required|xss_clean'
        ),
        array
            (
            'field' => 'shop',
            'label' => 'Shop',
            'rules' => 'required|xss_clean|max_length[100]'
        )
    );
    public $search_rules = array(
        array
            (
            'field' => 'search',
            'label' => 'Search',
            'rules' => 'xss_clean|max_length[100]'
        ),
        array
            (
            'field' => 'shop',
            'label' => 'Shop',
            'rules' => 'required|xss_clean|max_length[100]'
        )
    );
    public $example_rules = array(
        array
            (
            'field' => 'hashtag',
            'label' => 'Hashtag',
            'rules' => 'required|xss_clean|max_length[100]'
        ),
        array
            (
            'field' => 'shop',
            'label' => 'Shop',
            'rules' => 'required|xss_clean|max_length[100]'
        )
    );
    public $get_rules = array(
        array
            (
            'field' => 'id',
            'label' => 'id prdouct',
            'rules' => 'required|xss_clean|max_length[100]'
        ),
        array
            (
            'field' => 'shop',
            'label' => 'Shop',
            'rules' => 'required|xss_clean|max_length[100]'
        )
    );

    public function get($obj_id) {
        $this->DbHash->where($this->idkey, $obj_id);
        $query = $this->DbHash->get($this->table);
        return $query->row_array();
    }

    public function get_param_row($obj_id, $name_row) {
        $this->DbHash->where($name_row, $obj_id);
        $query = $this->DbHash->get($this->table);
        return $query->row_array();
    }

    public function get_all($table_name, $limit = 50, $start_from = 0) {
        $this->DbHash->limit($limit, $start_from);
        $query = $this->DbHash->get($table_name);
        return $query->result_array();
    }

    public function get_product($id, $table_name) {
        $this->DbHash->where('id', $id);
        $query = $this->DbHash->get($table_name);
        return $query->row_array();
    }

    public function add_data($data) {
        $this->DbHash->insert($this->table, $data);
        return $this->DbHash->insert_id();
    }

    public function update($shop, $data) {
        $this->DbHash->where($this->idkey, $shop);
        $this->DbHash->update($this->table, $data);
    }

    public function update_product($id, $data, $table_name) {
        $this->DbHash->where('id', $id);
        $this->DbHash->update($table_name, $data);
        return true;
    }

    public function create_table($table_name) {
        $sql = "create table if not exists {$table_name} ( id_hashtag int (11) AUTO_INCREMENT, hashtag varchar(100) NOT NULL, id varchar(100) NOT NULL, image varchar(255) NOT NULL, title varchar(250) NOT NULL, handle varchar(250) NOT NULL, showing int (1) NOT NULL, PRIMARY KEY (id_hashtag) );";
        $this->DbHash->query($sql);
        
        $sql = "create table if not exists {$table_name}_inst ( id_inst int (11) AUTO_INCREMENT, id_hashtag int (11), id varchar(100) NOT NULL, image varchar(255) NOT NULL, text text NOT NULL, name varchar(200) NOT NULL, link varchar(255) NOT NULL, showing int (1) NOT NULL, PRIMARY KEY (id_inst) );";
        $this->DbHash->query($sql);
        
        $sql = "create table if not exists {$table_name}_coll ( id_coll int (11) AUTO_INCREMENT, id varchar(100) NOT NULL, image varchar(255) NOT NULL, title varchar(250) NOT NULL, handle varchar(250) NOT NULL, body_html text NOT NULL, showing int (1) NOT NULL, PRIMARY KEY (id_coll) );";
        $this->DbHash->query($sql);
    }

    public function delete_table($table_name) {
        $sql = "DROP TABLE {$table_name};";
        $this->DbHash->query($sql);
    }

    public function add_products($product, $table_name) {
        foreach ($product as $item) {
            $item['image'] = $item['image']['src'];
            $this->DbHash->insert($table_name, $item);
        }
    }

    public function add_product($product, $table_name) {
        $this->DbHash->insert($table_name, $product);
    }

    public function change_product($id, $table_name, $prod = array()) {
        $product = $this->get_product($id, $table_name);        
        if (isset($product) && !empty($product)) {           
            $this->DbHash->where('id', $prod['id']);
            $this->DbHash->update($table_name, $prod);
        } else {
            $this->add_product($prod, $table_name);
        }
    }  

    public function delete_product($id_product, $table_name) {
        $this->DbHash->where('id', $id_product);
        $this->DbHash->delete($table_name);
    }
    
    public function collection_get($id, $table_name) {
        $this->DbHash->where('id', $id);
        $query = $this->DbHash->get($table_name);
        return $query->row_array();
    }
    
    public function collection_add($collection, $table_name) {
        $this->DbHash->insert($table_name, $collection);
    }

    public function collection_update($id, $table_name, $prod = array()) {
        $collection = $this->collection_get($id, $table_name);        
        if (isset($collection) && !empty($collection)) {           
            $this->DbHash->where('id', $prod['id']);
            $this->DbHash->update($table_name, $prod);
        } else {
            $this->collection_add($prod, $table_name);
        }
    }  

    public function collection_delete($id_product, $table_name) {
        $this->DbHash->where('id', $id_product);
        $this->DbHash->delete($table_name);
    }
    
    public function delete($obj_id) {
        $this->DbHash->where($this->idkey, $obj_id);
        $query = $this->DbHash->get($this->table);

        $this->DbHash->where($this->idkey, $obj_id);
        $this->DbHash->delete($this->table);
        return $query->row_array();
    }

    public function search($search, $table_name, $limit = 50, $start_from = 0) {
        $this->DbHash->select('*');
        $this->DbHash->like('hashtag', $search);
        $this->DbHash->or_like('id', $search);
        $this->DbHash->or_like('title', $search);
        $this->DbHash->or_like('handle', $search);
        $this->DbHash->limit($limit, $start_from);
        $query = $this->DbHash->get($table_name);
        return $query->result_array();
    }
    
    public function delete_hashtag($id, $table_name) {
        $this->DbHash->where('id_hashtag', $id);
        $this->DbHash->delete($table_name);
    }
    
    public function new_hashtag($id, $hashtag, $table_name) {     
        $array = $this->instagram($hashtag);        
        foreach ($array as $item){
            $item['id_hashtag'] = $id;
            $item['showing'] = 1;
            $this->DbHash->insert($table_name, $item);
        }
    }
    
    public function get_inst($id_prod, $table_name) {
        $product = $this->get_product($id_prod, $table_name);
        $this->DbHash->where('id_hashtag', $product['id_hashtag']);
        $query = $this->DbHash->get($table_name.'_inst');
        return $query->result_array();
    }

    public function test() {
        $id = '40716022811';
        $table_name = 'shop_6';

        $product = $this->get_product($id, $table_name);

        if (isset($product) && !empty($product)) {           
            $this->DbHash->where('id', $product['id']);
            $this->DbHash->update($table_name, $product);
        } else {
            $this->add_product($product, $table_name);
        }
    }
    
    private function instagram($h_tag) {
        $key = "8f301d3a6ecd4fb4a29542f535979c72";
        $link = "https://api.instagram.com/v1/tags/{$h_tag}/media/recent?client_id={$key}";
        $inst = json_decode($this->srch($link), true);
//        print_r($inst);
        $array = array();       
        foreach ($inst['data'] as $key => $item) {
            $push['link'] = $item['link'];
            $push['id'] = $item['id'];
            $push['image'] = $item['images']['thumbnail']['url'];
            $push['text'] =  str_replace(array("\r","\n", "\""), '', $item['caption']['text']);
            $push['name'] =  str_replace(array("\r","\n", "\""), '', $item['user']['username']);
            array_push($array, $push);
        }
        return $array;
    }
    
    public function srch($a) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $a);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $isle = curl_exec($ch);
        curl_close($ch);
        return $isle;
    }

}
