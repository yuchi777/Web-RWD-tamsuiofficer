function check() {
    var form = document.getElementById('form'); 
    var userid = form.userid.value
    var userpassword = form.userpassword.value

    if (userid.length == 0 && userpassword.length == 0) {
        document.getElementById("result").innerHTML="請輸入帳號和密碼";
        return false; 
    }else if (userid.length == 0) { 
        document.getElementById("result").innerHTML="請輸入帳號";
        return false; 
    }else if (userpassword.length == 0) { 
        document.getElementById("result").innerHTML="請輸入密碼";
        return false; 
    }else{
        return true; 
    }
}