<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Shop_model extends Crud {

    public $table = 'shop'; //имя таблицы
    public $idkey = 'name_shop'; //имя ID     
}