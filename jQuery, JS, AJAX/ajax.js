$(document).ready(function() {
    $("#onbuttom").click(function() {
        //var redirect_url = 'http://google.com.ua/';
        var base_url = 'http://slimnow.genovawebart.com/register';
        var name = $("form").find('input[name=name]').val();
        var lastname = $("form").find('input[name=lastname]').val();
        var email = $("form").find('input[name=email]').val();
        var temail = $("form").find('input[name=temail]').val();
        $.ajax({
            url: base_url,
            type: 'POST',
            dataType: "json", 
            data: {'name': name, 'lastname': lastname, 'email': email, 'temail': temail},
            success: function(data) {
                switch (data.status) {
                    case 'true':
                        console.log(data);
                        break;
                    default:
                        console.log(data.text);
                }                
            }
        });
    });
    $("#get_user").click(function() {
        var base_url = 'http://slimnow.genovawebart.com/get/';
        var id = $("form").find('input[name=id]').val();

        $.ajax({
            url: base_url + id,
            type: 'POST',
            dataType: "json",
            crossDomain: true,
            data: {},
            success: function(data) {
                switch (data.status) {
                    case 'true':
                        console.log(data);
                        break;
                    default:
                        console.log(data.text);
                } 
            }
        });
    });
    $("#add").click(function() {
        var base_url = 'http://slimnow.genovawebart.com/add/';
        var key = $("form").find('input[name=key]').val();
        var pole = $("form").find('input[name=pole]').val();

        $.ajax({
            url: base_url + key + '/' + pole,
            type: 'POST',
            dataType: "json",
            data: {},
            success: function(data) {
                switch (data.status) {
                    case 'true':
                        console.log(data);
                        break;
                    default:
                        console.log(data.text);
                } 
            }
        });
    });
    $("#auth").click(function() {
        var base_url = 'http://slimnow.genovawebart.com/auth';
        var email = $("form").find('input[name=mail]').val();

        $.ajax({
            url: base_url,
            type: 'POST',
            dataType: "json",
            data: {email: email},
            success: function(data) {
                switch (data.status) {
                    case 'true':
                        console.log(data);
                        break;
                    default:
                        console.log(data.text);
                }
            }
        });
    });
    $("#auth_token").click(function() {
        var base_url = 'http://slimnow.genovawebart.com/auth/';
        var email = $("form").find('input[name=tokemail]').val();
        var token = $("form").find('input[name=token]').val();

        $.ajax({
            url: base_url + token,
            type: 'POST',
            dataType: "json",
            data: {email: email},
            success: function(data) {
                switch (data.status) {
                    case 'true':
                        console.log(data);
                        break;
                    default:
                        console.log(data.text);
                }
            }
        });
    });
});

public function register() {
        $this->form_validation->set_rules($this->login_model->add_rules);
        $check = $this->form_validation->run();
        if ($check == TRUE) {
            $token = md5(uniqid(mt_rand(), true));
            $datausr = array(
                'name' => $this->input->post('firstname'),
                'surname' => $this->input->post('lastname'),
                'email' => $this->input->post('email'),
                'school' => $this->input->post('school'),
                'password' => hash('sha256', $this->input->post('pass')),
                'reg_date' => date("Y-m-d H:i:s"),
                'reg_token' => $token
            );
            $query = $this->login_model->add_user($token, $datausr);
            if ($query) {
                $data['message'] = 'Please, check your mail';
                $data['message_status'] = '1';
                $data['status'] = true;
                echo json_encode($data);
                return;
            }
        } else {
            $data['message'] = validation_errors();
            $data['message_status'] = '0';
            $data['status'] = false;
            echo json_encode($data);
            return;
        }
    }

$url = $_SERVER['HTTP_ORIGIN'];
        $url = str_ireplace('https://', '', $url);
        $url = str_ireplace('http://', '', $url);
//$url = 'dev-shop-for-app.myshopify.com';
        $shop = $this->cardshop_model->get($url);
        if ($url != null && empty($shop)) {
            $shop = $this->cardshop_model->get_param($url, 'domain');
        }
        if ($shop != null && !empty($shop)) {
            header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
            header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
            header('Access-Control-Max-Age: 1000');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
        }
        
        switch ($_SERVER['HTTP_ORIGIN']) {
            case 'http://www.naturalstone.co.uk':
            case 'http://naturalstone.co.uk':
                header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
                header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
                header('Access-Control-Max-Age: 1000');
                header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
                break;
        }
        $ansver = array();
        $data = array();
        //name,number,email,code,adress,tiling,size_1,size_2,size_3, id_product, date(auto)   
        $this->load->library('form_validation');
        $this->form_validation->set_rules($this->free_model->add_rules);
        if ($this->form_validation->run() == TRUE){
            $this->free_model->add();
            $ansver['status'] = true;
            
            $id = $this->db->insert_id();            
            $ansver['data'] = $this->free_model->get($id);
            
            $ansver['email_ansver'] = $this->free_model->send_email($ansver['data']);
        }else{
            $ansver['status'] = false;
            $ansver['no_valid'] = 'Не пройдена валидация';
        }     
        
        echo json_encode($ansver);
