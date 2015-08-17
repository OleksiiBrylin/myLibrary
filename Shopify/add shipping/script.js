$(document).ready(function() {

//    parse();  
//    go();
    next();
});
function next() {
    var JS = parse_p();
    $(JS).each(function(key, value) {
        if (key == 0) {
            return true;
        }
        if (value['CC'] == JS[key - 1]['CC']) {
            JS[key - 1]['Delivery'].push(value.Delivery[0]);
//            delete JS[key];
        }
    });
    var arr = [];
    $(JS).each(function(key, value) {
//        console.log(key);
        if (key == 0) {
            return true;
        } else {
            if (value['CC'] == JS[key - 1]['CC']) {
//            JS[key-1]['Delivery'].push(value.Delivery[0]);
//                delete JS[key];
                arr.push(key);
            }
        }
    });
    $(arr).each(function(key, value) {
        delete JS[value];
    });
    console.log(arr.length);
//    console.log(arr);
    console.log(JS);
    document.write(JSON.stringify(JS));
}

function go() {
    console.log('start');
    var JS = parse_json();
    $(JS).each(function(key, value) {
        value.Delivery = [];
        value.Delivery.push({
            'Delivery time': value['Delivery time'], 
            'Delivery type': value['Delivery type'], 
            "Cost":value['Cost'],
            "Additional information":value['Additional information']
        });
        delete value.Cost;
        delete value['Delivery time'];
        delete value['Delivery type'];
        delete value['Additional information'];
    });
    return JS;
//    console.log(JS);
//    document.write(JSON.stringify(JS));
}


function parse() {
    var mas = [];
    var country = $('select[name="select"] option');
    $(country).each(function(key, value) {
        if (key == 0) {
            return true;
        }
        mas.push([$(value).attr('value'), $(value).html()]);
    });
    $(mas).each(function(key, value) {
        $('tbody.' + value[0]).each(function(k, val) {
            var tr = $(val).find('tr');
            mas[key][2] = [];
            $(tr).each(function(k, val) {
                var td = $(val).find('td');
                $(td).eq(1).find('span').remove();
                $(td).eq(3).find('span').remove();
                var array = [
                    td.eq(0).html().replace(/\s{2,}/g, ' '),
                    td.eq(1).html().replace(/\s{2,}/g, ' '),
                    $(td).eq(2).find('span').eq(1).html().replace(/\s{2,}/g, ' '),
                    td.eq(3).html().replace(/\s{2,}/g, ' ')
                ];
                mas[key][2].push(array);
            });
        });

    });
    document.write(JSON.stringify(mas));
}
function parse_p() {
//    var P = [{"CC": "af", "Country": "Afghanistan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "al", "Country": "Albania", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "al", "Country": "Albania", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "dz", "Country": "Algeria", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ad", "Country": "Andorra", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ad", "Country": "Andorra", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ao", "Country": "Angola", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ai", "Country": "Anguilla", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ar", "Country": "Argentina", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ar", "Country": "Argentina", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "am", "Country": "Armenia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "am", "Country": "Armenia", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "aw", "Country": "Aruba", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "au", "Country": "Australia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "at", "Country": "Austria", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "az", "Country": "Azerbaijan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bs", "Country": "Bahamas", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bs", "Country": "Bahamas", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bh", "Country": "Bahrain", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bd", "Country": "Bangladesh", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bd", "Country": "Bangladesh", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bb", "Country": "Barbados", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bb", "Country": "Barbados", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "by", "Country": "Belarus", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "by", "Country": "Belarus", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "be", "Country": "Belgium", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bz", "Country": "Belize", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bz", "Country": "Belize", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bm", "Country": "Bermuda", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bm", "Country": "Bermuda", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bo", "Country": "Bolivia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bo", "Country": "Bolivia", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ba", "Country": "Bosnia and Herzegovina", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ba", "Country": "Bosnia and Herzegovina", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "br", "Country": "Brazil", "Additional information": " Import duties (100%) will apply to all express orders. We will contact you before sending your order to take payment. ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "br", "Country": "Brazil", "Additional information": " Import duties (100%) will apply to all express orders. We will contact you before sending your order to take payment. ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "vg", "Country": "British Virgin Islands", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bn", "Country": "Brunei", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bn", "Country": "Brunei", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "bg", "Country": "Bulgaria", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "kh", "Country": "Cambodia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "kh", "Country": "Cambodia", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ca", "Country": "Canada", "Additional information": " Import fees may be applied at customs ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ca", "Country": "Canada", "Additional information": " Import fees may be applied at customs ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ky", "Country": "Cayman Islands", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ky", "Country": "Cayman Islands", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "td", "Country": "Chad", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "cl", "Country": "Chile", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "cl", "Country": "Chile", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "cn", "Country": "China", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "co", "Country": "Colombia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "cr", "Country": "Costa Rica", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "cr", "Country": "Costa Rica", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "hr", "Country": "Croatia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "cy", "Country": "Cyprus", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "cz", "Country": "Czech Republic", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "dk", "Country": "Denmark", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "do", "Country": "Dominican Republic", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "eg", "Country": "Egypt", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ee", "Country": "Estonia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ee", "Country": "Estonia", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "fk", "Country": "Falkland Islands", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "fo", "Country": "Faroe Islands", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "fj", "Country": "Fiji", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "fj", "Country": "Fiji", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "fi", "Country": "Finland", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "fi", "Country": "Finland", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "fr", "Country": "France", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gm", "Country": "Gambia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ge", "Country": "Georgia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ge", "Country": "Georgia", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "de", "Country": "Germany", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gh", "Country": "Ghana", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gi", "Country": "Gibraltar", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gi", "Country": "Gibraltar", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gr", "Country": "Greece", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gl", "Country": "Greenland", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gd", "Country": "Grenada", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gp", "Country": "Guadeloupe", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gp", "Country": "Guadeloupe", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gu", "Country": "Guam", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gt", "Country": "Guatemala", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gg", "Country": "Guernsey", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gg", "Country": "Guernsey", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "hk", "Country": "Hong Kong", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "hu", "Country": "Hungary", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "is", "Country": "Iceland", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "in", "Country": "India", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "id", "Country": "Indonesia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "id", "Country": "Indonesia", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ir", "Country": "Iran", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "iq", "Country": "Iraq", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ie", "Country": "Ireland", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "il", "Country": "Israel", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "il", "Country": "Israel", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "it", "Country": "Italy", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "jm", "Country": "Jamaica", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "jp", "Country": "Japan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "jp", "Country": "Japan", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "je", "Country": "Jersey", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "je", "Country": "Jersey", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "jo", "Country": "Jordan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "kz", "Country": "Kazakhstan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ke", "Country": "Kenya", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "kr", "Country": "Korea", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "kr", "Country": "Korea", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "kw", "Country": "Kuwait", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "kg", "Country": "Kyrgyzstan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "la", "Country": "Laos", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "la", "Country": "Laos", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lv", "Country": "Latvia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lv", "Country": "Latvia", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lb", "Country": "Lebanon", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ly", "Country": "Libya", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "li", "Country": "Liechtenstein", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lt", "Country": "Lithuania", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lt", "Country": "Lithuania", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lu", "Country": "Luxembourg", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lu", "Country": "Luxembourg", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mo", "Country": "Macau", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mo", "Country": "Macau", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mk", "Country": "Macedonia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mg", "Country": "Madagascar", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mw", "Country": "Malawi", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "my", "Country": "Malaysia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mv", "Country": "Maldives", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mv", "Country": "Maldives", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ml", "Country": "Mali", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mt", "Country": "Malta", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mq", "Country": "Martinique", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mu", "Country": "Mauritius", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mu", "Country": "Mauritius", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mx", "Country": "Mexico", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mx", "Country": "Mexico", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "md", "Country": "Moldova", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "md", "Country": "Moldova", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mc", "Country": "Monaco", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mn", "Country": "Mongolia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "me", "Country": "Montenegro", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "me", "Country": "Montenegro", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ms", "Country": "Montserrat", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ma", "Country": "Morocco", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mz", "Country": "Mozambique", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "mm", "Country": "Myanmar [Burma]", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "na", "Country": "Namibia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "nl", "Country": "Netherlands", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "an", "Country": "Netherlands Antilles", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "nz", "Country": "New Zealand", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ni", "Country": "Nicaragua", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ng", "Country": "Nigeria", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "no", "Country": "Norway", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "no", "Country": "Norway", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "om", "Country": "Oman", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pk", "Country": "Pakistan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pk", "Country": "Pakistan", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pa", "Country": "Panama", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pa", "Country": "Panama", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pg", "Country": "Papua New Guinea", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "py", "Country": "Paraguay", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "py", "Country": "Paraguay", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pe", "Country": "Peru", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pe", "Country": "Peru", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ph", "Country": "Philippines", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pl", "Country": "Poland", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pt", "Country": "Portugal", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pr", "Country": "Puerto Rico", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "pr", "Country": "Puerto Rico", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "qa", "Country": "Qatar", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ro", "Country": "Romania", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ro", "Country": "Romania", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ru", "Country": "Russia", "Additional information": " We will contact you to ask for some more information. ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ru", "Country": "Russia", "Additional information": " We will contact you to ask for some more information. ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "re", "Country": "RГ©union", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "re", "Country": "RГ©union", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lc", "Country": "Saint Lucia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sm", "Country": "San Marino", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sm", "Country": "San Marino", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sa", "Country": "Saudi Arabia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "rs", "Country": "Serbia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "rs", "Country": "Serbia", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sc", "Country": "Seychelles", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sc", "Country": "Seychelles", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sl", "Country": "Sierra Leone", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sg", "Country": "Singapore", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sg", "Country": "Singapore", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sk", "Country": "Slovakia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "si", "Country": "Slovenia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "za", "Country": "South Africa", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "es", "Country": "Spain", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lk", "Country": "Sri Lanka", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "lk", "Country": "Sri Lanka", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sd", "Country": "Sudan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sz", "Country": "Swaziland", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "se", "Country": "Sweden", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "se", "Country": "Sweden", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ch", "Country": "Switzerland", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ch", "Country": "Switzerland", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "sy", "Country": "Syria", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "tw", "Country": "Taiwan", "Additional information": " High value orders may be subject to import fees. Please contact us for further details. ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "tj", "Country": "Tajikistan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "tz", "Country": "Tanzania", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "th", "Country": "Thailand", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "th", "Country": "Thailand", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "tt", "Country": "Trinidad and Tobago", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "tn", "Country": "Tunisia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "tn", "Country": "Tunisia", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "tr", "Country": "Turkey", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "tm", "Country": "Turkmenistan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "tc", "Country": "Turks and Caicos Islands", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "vi", "Country": "U.S. Virgin Islands", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ug", "Country": "Uganda", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ua", "Country": "Ukraine", "Additional information": " For orders above EUR300, there is a chance import duties will be applied at customs ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ua", "Country": "Ukraine", "Additional information": " For orders above EUR300, there is a chance import duties will be applied at customs ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ae", "Country": "United Arab Emirates", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gb", "Country": "United Kingdom", "Additional information": " Orders placed after 2pm will be dispatched the next working day. ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "gb", "Country": "United Kingdom", "Additional information": "Free delivery if you spend ВЈ25 or more. Orders placed after 2pm will be dispatched the next working day. ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "us", "Country": "United States", "Additional information": " USA Import Duties may apply to large orders. If you have any questions, please contact the US Customs Office. ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "us", "Country": "United States", "Additional information": " USA Import Duties may apply to large orders. If you have any questions, please contact the US Customs Office. ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "uy", "Country": "Uruguay", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "uy", "Country": "Uruguay", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "uz", "Country": "Uzbekistan", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ve", "Country": "Venezuela", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ve", "Country": "Venezuela", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "vn", "Country": "Vietnam", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "vn", "Country": "Vietnam", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "ye", "Country": "Yemen", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "zm", "Country": "Zambia", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "zw", "Country": "Zimbabwe", "Additional information": " ", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}, {"CC": "zw", "Country": "Zimbabwe", "Additional information": "", "Delivery": [{"Delivery time": "5-7 working days", "Delivery type": "Express"}]}];
    var P = go();
    return P;
}
function parse_json() {

    var JS = [
      {
    "CC": "",
    "Country": "Select your country",
    "Delivery": [{
        "Delivery time": "-",
        "Delivery type": "Standard",
        "Cost": "-",
        "Additional information": " "
    }, {
        "Delivery time": "-",
        "Delivery type": "Express",
        "Cost": "-",
        "Additional information": ""
    }]
},
      {
    "CC": "af",
    "Country": "Afghanistan",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£34,95",
        "Additional information": " "
    }]
}, {
    "CC": "al",
    "Country": "Albania",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£22,95",
        "Additional information": ""
    }]
}, {
    "CC": "dz",
    "Country": "Algeria",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "ad",
    "Country": "Andorra",
    "Delivery": [{
        "Delivery time": " 3-10 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "ao",
    "Country": "Angola",
    "Delivery": [{
        "Delivery time": " 4-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "ai",
    "Country": "Anguilla",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "ar",
    "Country": "Argentina",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "am",
    "Country": "Armenia",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "aw",
    "Country": "Aruba",
    "Delivery": [{
        "Delivery time": " 5-6 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "au",
    "Country": "Australia",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "at",
    "Country": "Austria",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "az",
    "Country": "Azerbaijan",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": " "
    }]
}, {
    "CC": "bs",
    "Country": "Bahamas",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£35,95",
        "Additional information": ""
    }]
}, {
    "CC": "bh",
    "Country": "Bahrain",
    "Delivery": [{
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "bd",
    "Country": "Bangladesh",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "bb",
    "Country": "Barbados",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-5 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": ""
    }]
}, {
    "CC": "by",
    "Country": "Belarus",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "be",
    "Country": "Belgium",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "bz",
    "Country": "Belize",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£12,95",
        "Additional information": " "
    }, {
        "Delivery time": " 7-9 working days ",
        "Delivery type": "Express",
        "Cost": "£24,95",
        "Additional information": " "
    }]
}, {
    "CC": "bm",
    "Country": "Bermuda",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£35,95",
        "Additional information": ""
    }]
}, {
    "CC": "bo",
    "Country": "Bolivia",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "ba",
    "Country": "Bosnia and Herzegovina",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "br",
    "Country": "Brazil",
    "Delivery": [{
        "Delivery time": " 7-40 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " Import duties (100%) will apply to all express orders. We will contact you before sending your order to take payment. "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " Import duties (100%) will apply to all express orders. We will contact you before sending your order to take payment. "
    }]
}, {
    "CC": "vg",
    "Country": "British Virgin Islands",
    "Delivery": [{
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "bn",
    "Country": "Brunei",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 6-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "bg",
    "Country": "Bulgaria",
    "Delivery": [{
        "Delivery time": " 1-3 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "kh",
    "Country": "Cambodia",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-6 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "ca",
    "Country": "Canada",
    "Delivery": [{
        "Delivery time": " 7-20 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " Import fees may be applied at customs "
    }, {
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": " Import fees may be applied at customs "
    }]
}, {
    "CC": "ky",
    "Country": "Cayman Islands",
    "Delivery": [{
        "Delivery time": " 14-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£12,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "td",
    "Country": "Chad",
    "Delivery": [{
        "Delivery time": " 7-9 working days ",
        "Delivery type": "Express",
        "Cost": "£61,95",
        "Additional information": " "
    }]
}, {
    "CC": "cl",
    "Country": "Chile",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "cn",
    "Country": "China",
    "Delivery": [{
        "Delivery time": " 5-14 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "co",
    "Country": "Colombia",
    "Delivery": [{
        "Delivery time": " 4-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "cr",
    "Country": "Costa Rica",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "hr",
    "Country": "Croatia",
    "Delivery": [{
        "Delivery time": " 4-6 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "cy",
    "Country": "Cyprus",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "cz",
    "Country": "Czech Republic",
    "Delivery": [{
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "dk",
    "Country": "Denmark",
    "Delivery": [{
        "Delivery time": " 3-4 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "do",
    "Country": "Dominican Republic",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "eg",
    "Country": "Egypt",
    "Delivery": [{
        "Delivery time": " 2-3 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "ee",
    "Country": "Estonia",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-3 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "fk",
    "Country": "Falkland Islands",
    "Delivery": [{
        "Delivery time": " 14-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "fo",
    "Country": "Faroe Islands",
    "Delivery": [{
        "Delivery time": " 14-40 working days ",
        "Delivery type": "Standard",
        "Cost": "£16,95",
        "Additional information": " "
    }]
}, {
    "CC": "fj",
    "Country": "Fiji",
    "Delivery": [{
        "Delivery time": " 14-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£14,95",
        "Additional information": " "
    }, {
        "Delivery time": " 7-9 working days ",
        "Delivery type": "Express",
        "Cost": "£32,95",
        "Additional information": ""
    }]
}, {
    "CC": "fi",
    "Country": "Finland",
    "Delivery": [{
        "Delivery time": " 5-9 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-3 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "fr",
    "Country": "France",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "gm",
    "Country": "Gambia",
    "Delivery": [{
        "Delivery time": " 7-9 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "ge",
    "Country": "Georgia",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-5 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": ""
    }]
}, {
    "CC": "de",
    "Country": "Germany",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "gh",
    "Country": "Ghana",
    "Delivery": [{
        "Delivery time": " 4-5 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": " "
    }]
}, {
    "CC": "gi",
    "Country": "Gibraltar",
    "Delivery": [{
        "Delivery time": " 3-10 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 1-3 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "gr",
    "Country": "Greece",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "gl",
    "Country": "Greenland",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "gd",
    "Country": "Grenada",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "gp",
    "Country": "Guadeloupe",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": ""
    }]
}, {
    "CC": "gu",
    "Country": "Guam",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "gt",
    "Country": "Guatemala",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "gg",
    "Country": "Guernsey",
    "Delivery": [{
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Standard",
        "Cost": "£3,95",
        "Additional information": " "
    }, {
        "Delivery time": " 1-3 working days ",
        "Delivery type": "Express",
        "Cost": "£6,95",
        "Additional information": ""
    }]
}, {
    "CC": "hk",
    "Country": "Hong Kong",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "hu",
    "Country": "Hungary",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "is",
    "Country": "Iceland",
    "Delivery": [{
        "Delivery time": " 14-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "in",
    "Country": "India",
    "Delivery": [{
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "id",
    "Country": "Indonesia",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "ir",
    "Country": "Iran",
    "Delivery": [{
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "iq",
    "Country": "Iraq",
    "Delivery": [{
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "ie",
    "Country": "Ireland",
    "Delivery": [{
        "Delivery time": " 2-3 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "il",
    "Country": "Israel",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "it",
    "Country": "Italy",
    "Delivery": [{
        "Delivery time": " 3-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "jm",
    "Country": "Jamaica",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "jp",
    "Country": "Japan",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "je",
    "Country": "Jersey",
    "Delivery": [{
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Standard",
        "Cost": "£3,95",
        "Additional information": " "
    }, {
        "Delivery time": " 1-3 working days ",
        "Delivery type": "Express",
        "Cost": "£6,95",
        "Additional information": ""
    }]
}, {
    "CC": "jo",
    "Country": "Jordan",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "kz",
    "Country": "Kazakhstan",
    "Delivery": [{
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "ke",
    "Country": "Kenya",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "kr",
    "Country": "Korea",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-4 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "kw",
    "Country": "Kuwait",
    "Delivery": [{
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "kg",
    "Country": "Kyrgyzstan",
    "Delivery": [{
        "Delivery time": " 7-9 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "la",
    "Country": "Laos",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "lv",
    "Country": "Latvia",
    "Delivery": [{
        "Delivery time": " 5-6 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-4 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "lb",
    "Country": "Lebanon",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "ly",
    "Country": "Libya",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "li",
    "Country": "Liechtenstein",
    "Delivery": [{
        "Delivery time": " 5-6 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "lt",
    "Country": "Lithuania",
    "Delivery": [{
        "Delivery time": " 5-6 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-4 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "lu",
    "Country": "Luxembourg",
    "Delivery": [{
        "Delivery time": " 3-4 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 1-3 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "mo",
    "Country": "Macau",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "mk",
    "Country": "Macedonia",
    "Delivery": [{
        "Delivery time": " 7-21 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "mg",
    "Country": "Madagascar",
    "Delivery": [{
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "mw",
    "Country": "Malawi",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "my",
    "Country": "Malaysia",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "mv",
    "Country": "Maldives",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-6 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "ml",
    "Country": "Mali",
    "Delivery": [{
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "mt",
    "Country": "Malta",
    "Delivery": [{
        "Delivery time": " 1-3 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "mq",
    "Country": "Martinique",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "mu",
    "Country": "Mauritius",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-6 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": ""
    }]
}, {
    "CC": "mx",
    "Country": "Mexico",
    "Delivery": [{
        "Delivery time": " 7-40 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 5-6 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "md",
    "Country": "Moldova",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-6 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": ""
    }]
}, {
    "CC": "mc",
    "Country": "Monaco",
    "Delivery": [{
        "Delivery time": " 2-3 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "mn",
    "Country": "Mongolia",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "me",
    "Country": "Montenegro",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-6 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "ms",
    "Country": "Montserrat",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "ma",
    "Country": "Morocco",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "mz",
    "Country": "Mozambique",
    "Delivery": [{
        "Delivery time": " 7-9 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": " "
    }]
}, {
    "CC": "mm",
    "Country": "Myanmar [Burma]",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "na",
    "Country": "Namibia",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": " "
    }]
}, {
    "CC": "nl",
    "Country": "Netherlands",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "an",
    "Country": "Netherlands Antilles",
    "Delivery": [{
        "Delivery time": " 8-12 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "nz",
    "Country": "New Zealand",
    "Delivery": [{
        "Delivery time": " 3-6 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "ni",
    "Country": "Nicaragua",
    "Delivery": [{
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "ng",
    "Country": "Nigeria",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "no",
    "Country": "Norway",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "om",
    "Country": "Oman",
    "Delivery": [{
        "Delivery time": " 1-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "pk",
    "Country": "Pakistan",
    "Delivery": [{
        "Delivery time": " 3-10 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": ""
    }]
}, {
    "CC": "pa",
    "Country": "Panama",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "pg",
    "Country": "Papua New Guinea",
    "Delivery": [{
        "Delivery time": " 7-9 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "py",
    "Country": "Paraguay",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "pe",
    "Country": "Peru",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "ph",
    "Country": "Philippines",
    "Delivery": [{
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "pl",
    "Country": "Poland",
    "Delivery": [{
        "Delivery time": " 3-4 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "pt",
    "Country": "Portugal",
    "Delivery": [{
        "Delivery time": " 2-3 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "pr",
    "Country": "Puerto Rico",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "qa",
    "Country": "Qatar",
    "Delivery": [{
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "ro",
    "Country": "Romania",
    "Delivery": [{
        "Delivery time": " 5-6 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": ""
    }]
}, {
    "CC": "ru",
    "Country": "Russia",
    "Delivery": [{
        "Delivery time": " 40-60 working days ",
        "Delivery type": "Standard",
        "Cost": "£12,95",
        "Additional information": " We will contact you to ask for some more information. "
    }, {
        "Delivery time": " 10-14 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": " We will contact you to ask for some more information. "
    }]
}, {
    "CC": "re",
    "Country": "RГ©union",
    "Delivery": [{
        "Delivery time": " 14-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£9,95",
        "Additional information": " "
    }, {
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "lc",
    "Country": "Saint Lucia",
    "Delivery": [{
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "sm",
    "Country": "San Marino",
    "Delivery": [{
        "Delivery time": " 3-10 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-3 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": ""
    }]
}, {
    "CC": "sa",
    "Country": "Saudi Arabia",
    "Delivery": [{
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "rs",
    "Country": "Serbia",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-6 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "sc",
    "Country": "Seychelles",
    "Delivery": [{
        "Delivery time": " 14-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 7-9 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "sl",
    "Country": "Sierra Leone",
    "Delivery": [{
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "sg",
    "Country": "Singapore",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£8,95",
        "Additional information": ""
    }]
}, {
    "CC": "sk",
    "Country": "Slovakia",
    "Delivery": [{
        "Delivery time": " 4-5 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "si",
    "Country": "Slovenia",
    "Delivery": [{
        "Delivery time": " 4-5 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "za",
    "Country": "South Africa",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " "
    }]
}, {
    "CC": "es",
    "Country": "Spain",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "lk",
    "Country": "Sri Lanka",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": ""
    }]
}, {
    "CC": "sd",
    "Country": "Sudan",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "sz",
    "Country": "Swaziland",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "se",
    "Country": "Sweden",
    "Delivery": [{
        "Delivery time": " 5-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "ch",
    "Country": "Switzerland",
    "Delivery": [{
        "Delivery time": " 3-10 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "sy",
    "Country": "Syria",
    "Delivery": [{
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "tw",
    "Country": "Taiwan",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£9,95",
        "Additional information": " High value orders may be subject to import fees. Please contact us for further details. "
    }]
}, {
    "CC": "tj",
    "Country": "Tajikistan",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "tz",
    "Country": "Tanzania",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": " "
    }]
}, {
    "CC": "th",
    "Country": "Thailand",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": ""
    }]
}, {
    "CC": "tt",
    "Country": "Trinidad and Tobago",
    "Delivery": [{
        "Delivery time": " 4-6 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "tn",
    "Country": "Tunisia",
    "Delivery": [{
        "Delivery time": " 10-18 woring days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "tr",
    "Country": "Turkey",
    "Delivery": [{
        "Delivery time": " 2-3 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "tm",
    "Country": "Turkmenistan",
    "Delivery": [{
        "Delivery time": " 7-9 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "tc",
    "Country": "Turks and Caicos Islands",
    "Delivery": [{
        "Delivery time": " 5-7 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "vi",
    "Country": "U.S. Virgin Islands",
    "Delivery": [{
        "Delivery time": " 6-8 working days ",
        "Delivery type": "Express",
        "Cost": "£29,95",
        "Additional information": " "
    }]
}, {
    "CC": "ug",
    "Country": "Uganda",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "ua",
    "Country": "Ukraine",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " For orders above EUR300, there is a chance import duties will be applied at customs "
    }, {
        "Delivery time": " 4-6 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": " For orders above EUR300, there is a chance import duties will be applied at customs "
    }]
}, {
    "CC": "ae",
    "Country": "United Arab Emirates",
    "Delivery": [{
        "Delivery time": " 2-3 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "gb",
    "Country": "United Kingdom",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Standard",
        "Cost": "£4,95",
        "Additional information": " Orders placed after 2pm will be dispatched the next working day. "
    }, {
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Free",
        "Cost": "£0,00",
        "Additional information": "Free delivery if you spend ВЈ25 or more. Orders placed after 2pm will be dispatched the next working day. "
    }]
}, {
    "CC": "us",
    "Country": "United States",
    "Delivery": [{
        "Delivery time": " 5-9 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " USA Import Duties may apply to large orders. If you have any questions, please contact the US Customs Office. "
    }, {
        "Delivery time": " 2-5 working days ",
        "Delivery type": "Express",
        "Cost": "£14,95",
        "Additional information": " USA Import Duties may apply to large orders. If you have any questions, please contact the US Customs Office. "
    }]
}, {
    "CC": "uy",
    "Country": "Uruguay",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "uz",
    "Country": "Uzbekistan",
    "Delivery": [{
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£12,95",
        "Additional information": " "
    }]
}, {
    "CC": "ve",
    "Country": "Venezuela",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-7 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": ""
    }]
}, {
    "CC": "vn",
    "Country": "Vietnam",
    "Delivery": [{
        "Delivery time": " 7-14 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}, {
    "CC": "ye",
    "Country": "Yemen",
    "Delivery": [{
        "Delivery time": " 2-4 working days ",
        "Delivery type": "Express",
        "Cost": "£7,95",
        "Additional information": " "
    }]
}, {
    "CC": "zm",
    "Country": "Zambia",
    "Delivery": [{
        "Delivery time": " 3-5 working days ",
        "Delivery type": "Express",
        "Cost": "£19,95",
        "Additional information": " "
    }]
}, {
    "CC": "zw",
    "Country": "Zimbabwe",
    "Delivery": [{
        "Delivery time": " 7-30 working days ",
        "Delivery type": "Standard",
        "Cost": "£7,95",
        "Additional information": " "
    }, {
        "Delivery time": " 4-6 working days ",
        "Delivery type": "Express",
        "Cost": "£16,95",
        "Additional information": ""
    }]
}];
    return JS;
}
var K = [{"CC":"af","Country":"Afghanistan","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£34,95","Additional information":" "}]},{"CC":"al","Country":"Albania","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£22,95","Additional information":""}]} ,{"CC":"dz","Country":"Algeria","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"ad","Country":"Andorra","Delivery":[{"Delivery time":" 3-10 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"ao","Country":"Angola","Delivery":[{"Delivery time":" 4-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"ai","Country":"Anguilla","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"ar","Country":"Argentina","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"am","Country":"Armenia","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"aw","Country":"Aruba","Delivery":[{"Delivery time":" 5-6 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"au","Country":"Australia","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"at","Country":"Austria","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"az","Country":"Azerbaijan","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":" "}]},{"CC":"bs","Country":"Bahamas","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£35,95","Additional information":""}]} ,{"CC":"bh","Country":"Bahrain","Delivery":[{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"bd","Country":"Bangladesh","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"bb","Country":"Barbados","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 4-5 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":""}]} ,{"CC":"by","Country":"Belarus","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"be","Country":"Belgium","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"bz","Country":"Belize","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£12,95","Additional information":" "},{"Delivery time":" 7-9 working days ","Delivery type":"Express","Cost":"£24,95","Additional information":" "}]} ,{"CC":"bm","Country":"Bermuda","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£35,95","Additional information":""}]} ,{"CC":"bo","Country":"Bolivia","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"ba","Country":"Bosnia and Herzegovina","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"br","Country":"Brazil","Delivery":[{"Delivery time":" 7-40 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" Import duties (100%) will apply to all express orders. We will contact you before sending your order to take payment. "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" Import duties (100%) will apply to all express orders. We will contact you before sending your order to take payment. "}]} ,{"CC":"vg","Country":"British Virgin Islands","Delivery":[{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"bn","Country":"Brunei","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 6-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"bg","Country":"Bulgaria","Delivery":[{"Delivery time":" 1-3 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"kh","Country":"Cambodia","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 4-6 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"ca","Country":"Canada","Delivery":[{"Delivery time":" 7-20 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" Import fees may be applied at customs "},{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":" Import fees may be applied at customs "}]} ,{"CC":"ky","Country":"Cayman Islands","Delivery":[{"Delivery time":" 14-30 working days ","Delivery type":"Standard","Cost":"£12,95","Additional information":" "},{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"td","Country":"Chad","Delivery":[{"Delivery time":" 7-9 working days ","Delivery type":"Express","Cost":"£61,95","Additional information":" "}]},{"CC":"cl","Country":"Chile","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"cn","Country":"China","Delivery":[{"Delivery time":" 5-14 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"co","Country":"Colombia","Delivery":[{"Delivery time":" 4-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"cr","Country":"Costa Rica","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"hr","Country":"Croatia","Delivery":[{"Delivery time":" 4-6 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"cy","Country":"Cyprus","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"cz","Country":"Czech Republic","Delivery":[{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"dk","Country":"Denmark","Delivery":[{"Delivery time":" 3-4 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"do","Country":"Dominican Republic","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"eg","Country":"Egypt","Delivery":[{"Delivery time":" 2-3 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"ee","Country":"Estonia","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-3 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"fk","Country":"Falkland Islands","Delivery":[{"Delivery time":" 14-30 working days ","Delivery type":"Standard","Cost":"£12,95","Additional information":" "}]},{"CC":"fo","Country":"Faroe Islands","Delivery":[{"Delivery time":" 14-40 working days ","Delivery type":"Standard","Cost":"£16,95","Additional information":" "}]},{"CC":"fj","Country":"Fiji","Delivery":[{"Delivery time":" 14-30 working days ","Delivery type":"Standard","Cost":"£14,95","Additional information":" "},{"Delivery time":" 7-9 working days ","Delivery type":"Express","Cost":"£32,95","Additional information":""}]} ,{"CC":"fi","Country":"Finland","Delivery":[{"Delivery time":" 5-9 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-3 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"fr","Country":"France","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"gm","Country":"Gambia","Delivery":[{"Delivery time":" 7-9 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"ge","Country":"Georgia","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 4-5 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":""}]} ,{"CC":"de","Country":"Germany","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"gh","Country":"Ghana","Delivery":[{"Delivery time":" 4-5 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":" "}]},{"CC":"gi","Country":"Gibraltar","Delivery":[{"Delivery time":" 3-10 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 1-3 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"gr","Country":"Greece","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"gl","Country":"Greenland","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£12,95","Additional information":" "}]},{"CC":"gd","Country":"Grenada","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"gp","Country":"Guadeloupe","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":""}]} ,{"CC":"gu","Country":"Guam","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"gt","Country":"Guatemala","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"gg","Country":"Guernsey","Delivery":[{"Delivery time":" 2-5 working days ","Delivery type":"Standard","Cost":"£3,95","Additional information":" "},{"Delivery time":" 1-3 working days ","Delivery type":"Express","Cost":"£6,95","Additional information":""}]} ,{"CC":"hk","Country":"Hong Kong","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"hu","Country":"Hungary","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"is","Country":"Iceland","Delivery":[{"Delivery time":" 14-30 working days ","Delivery type":"Standard","Cost":"£12,95","Additional information":" "}]},{"CC":"in","Country":"India","Delivery":[{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"id","Country":"Indonesia","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"ir","Country":"Iran","Delivery":[{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"iq","Country":"Iraq","Delivery":[{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"ie","Country":"Ireland","Delivery":[{"Delivery time":" 2-3 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"il","Country":"Israel","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"it","Country":"Italy","Delivery":[{"Delivery time":" 3-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"jm","Country":"Jamaica","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"jp","Country":"Japan","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"je","Country":"Jersey","Delivery":[{"Delivery time":" 2-5 working days ","Delivery type":"Standard","Cost":"£3,95","Additional information":" "},{"Delivery time":" 1-3 working days ","Delivery type":"Express","Cost":"£6,95","Additional information":""}]} ,{"CC":"jo","Country":"Jordan","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"kz","Country":"Kazakhstan","Delivery":[{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"ke","Country":"Kenya","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"kr","Country":"Korea","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 3-4 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"kw","Country":"Kuwait","Delivery":[{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"kg","Country":"Kyrgyzstan","Delivery":[{"Delivery time":" 7-9 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"la","Country":"Laos","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"lv","Country":"Latvia","Delivery":[{"Delivery time":" 5-6 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 3-4 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"lb","Country":"Lebanon","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"ly","Country":"Libya","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"li","Country":"Liechtenstein","Delivery":[{"Delivery time":" 5-6 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"lt","Country":"Lithuania","Delivery":[{"Delivery time":" 5-6 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 3-4 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"lu","Country":"Luxembourg","Delivery":[{"Delivery time":" 3-4 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 1-3 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"mo","Country":"Macau","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"mk","Country":"Macedonia","Delivery":[{"Delivery time":" 7-21 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "}]},{"CC":"mg","Country":"Madagascar","Delivery":[{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"mw","Country":"Malawi","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"my","Country":"Malaysia","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"mv","Country":"Maldives","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 3-6 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"ml","Country":"Mali","Delivery":[{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"mt","Country":"Malta","Delivery":[{"Delivery time":" 1-3 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"mq","Country":"Martinique","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "}]},{"CC":"mu","Country":"Mauritius","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 4-6 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":""}]} ,{"CC":"mx","Country":"Mexico","Delivery":[{"Delivery time":" 7-40 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 5-6 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"md","Country":"Moldova","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 4-6 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":""}]} ,{"CC":"mc","Country":"Monaco","Delivery":[{"Delivery time":" 2-3 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"mn","Country":"Mongolia","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "}]},{"CC":"me","Country":"Montenegro","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 3-6 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"ms","Country":"Montserrat","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"ma","Country":"Morocco","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"mz","Country":"Mozambique","Delivery":[{"Delivery time":" 7-9 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":" "}]},{"CC":"mm","Country":"Myanmar [Burma]","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"na","Country":"Namibia","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":" "}]},{"CC":"nl","Country":"Netherlands","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"an","Country":"Netherlands Antilles","Delivery":[{"Delivery time":" 8-12 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"nz","Country":"New Zealand","Delivery":[{"Delivery time":" 3-6 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"ni","Country":"Nicaragua","Delivery":[{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"ng","Country":"Nigeria","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"no","Country":"Norway","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"om","Country":"Oman","Delivery":[{"Delivery time":" 1-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"pk","Country":"Pakistan","Delivery":[{"Delivery time":" 3-10 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":""}]} ,{"CC":"pa","Country":"Panama","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"pg","Country":"Papua New Guinea","Delivery":[{"Delivery time":" 7-9 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"py","Country":"Paraguay","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"pe","Country":"Peru","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"ph","Country":"Philippines","Delivery":[{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"pl","Country":"Poland","Delivery":[{"Delivery time":" 3-4 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"pt","Country":"Portugal","Delivery":[{"Delivery time":" 2-3 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"pr","Country":"Puerto Rico","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"qa","Country":"Qatar","Delivery":[{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"ro","Country":"Romania","Delivery":[{"Delivery time":" 5-6 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":""}]} ,{"CC":"ru","Country":"Russia","Delivery":[{"Delivery time":" 40-60 working days ","Delivery type":"Standard","Cost":"£12,95","Additional information":" We will contact you to ask for some more information. "},{"Delivery time":" 10-14 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":" We will contact you to ask for some more information. "}]} ,{"CC":"re","Country":"RГ©union","Delivery":[{"Delivery time":" 14-30 working days ","Delivery type":"Standard","Cost":"£9,95","Additional information":" "},{"Delivery time":" 7-14 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"lc","Country":"Saint Lucia","Delivery":[{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"sm","Country":"San Marino","Delivery":[{"Delivery time":" 3-10 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-3 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":""}]} ,{"CC":"sa","Country":"Saudi Arabia","Delivery":[{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"rs","Country":"Serbia","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 3-6 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"sc","Country":"Seychelles","Delivery":[{"Delivery time":" 14-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 7-9 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"sl","Country":"Sierra Leone","Delivery":[{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"sg","Country":"Singapore","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£8,95","Additional information":""}]} ,{"CC":"sk","Country":"Slovakia","Delivery":[{"Delivery time":" 4-5 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"si","Country":"Slovenia","Delivery":[{"Delivery time":" 4-5 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"za","Country":"South Africa","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" "}]},{"CC":"es","Country":"Spain","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"lk","Country":"Sri Lanka","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":""}]} ,{"CC":"sd","Country":"Sudan","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"sz","Country":"Swaziland","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"se","Country":"Sweden","Delivery":[{"Delivery time":" 5-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"ch","Country":"Switzerland","Delivery":[{"Delivery time":" 3-10 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"sy","Country":"Syria","Delivery":[{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"tw","Country":"Taiwan","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£9,95","Additional information":" High value orders may be subject to import fees. Please contact us for further details. "}]},{"CC":"tj","Country":"Tajikistan","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"tz","Country":"Tanzania","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":" "}]},{"CC":"th","Country":"Thailand","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":""}]} ,{"CC":"tt","Country":"Trinidad and Tobago","Delivery":[{"Delivery time":" 4-6 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"tn","Country":"Tunisia","Delivery":[{"Delivery time":" 10-18 woring days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"tr","Country":"Turkey","Delivery":[{"Delivery time":" 2-3 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"tm","Country":"Turkmenistan","Delivery":[{"Delivery time":" 7-9 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"tc","Country":"Turks and Caicos Islands","Delivery":[{"Delivery time":" 5-7 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"vi","Country":"U.S. Virgin Islands","Delivery":[{"Delivery time":" 6-8 working days ","Delivery type":"Express","Cost":"£29,95","Additional information":" "}]},{"CC":"ug","Country":"Uganda","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"ua","Country":"Ukraine","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" For orders above EUR300, there is a chance import duties will be applied at customs "},{"Delivery time":" 4-6 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":" For orders above EUR300, there is a chance import duties will be applied at customs "}]} ,{"CC":"ae","Country":"United Arab Emirates","Delivery":[{"Delivery time":" 2-3 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"gb","Country":"United Kingdom","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Standard","Cost":"£4,95","Additional information":" Orders placed after 2pm will be dispatched the next working day. "},{"Delivery time":" 3-5 working days ","Delivery type":"Free","Cost":"£0,00","Additional information":"Free delivery if you spend ВЈ25 or more. Orders placed after 2pm will be dispatched the next working day. "}]} ,{"CC":"us","Country":"United States","Delivery":[{"Delivery time":" 5-9 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" USA Import Duties may apply to large orders. If you have any questions, please contact the US Customs Office. "},{"Delivery time":" 2-5 working days ","Delivery type":"Express","Cost":"£14,95","Additional information":" USA Import Duties may apply to large orders. If you have any questions, please contact the US Customs Office. "}]} ,{"CC":"uy","Country":"Uruguay","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"uz","Country":"Uzbekistan","Delivery":[{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£12,95","Additional information":" "}]},{"CC":"ve","Country":"Venezuela","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 4-7 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":""}]} ,{"CC":"vn","Country":"Vietnam","Delivery":[{"Delivery time":" 7-14 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ,{"CC":"ye","Country":"Yemen","Delivery":[{"Delivery time":" 2-4 working days ","Delivery type":"Express","Cost":"£7,95","Additional information":" "}]},{"CC":"zm","Country":"Zambia","Delivery":[{"Delivery time":" 3-5 working days ","Delivery type":"Express","Cost":"£19,95","Additional information":" "}]},{"CC":"zw","Country":"Zimbabwe","Delivery":[{"Delivery time":" 7-30 working days ","Delivery type":"Standard","Cost":"£7,95","Additional information":" "},{"Delivery time":" 4-6 working days ","Delivery type":"Express","Cost":"£16,95","Additional information":""}]} ];

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