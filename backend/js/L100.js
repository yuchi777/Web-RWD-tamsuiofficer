function check() {
    var form = document.getElementById('login-form'); 
    var account = form.account.value
    var password = form.password.value

    if (account.length == 0 && password.length == 0) {
        document.getElementById("result").innerHTML="請輸入帳號和密碼";
        return false; 
    }else if (account.length == 0) { 
        document.getElementById("result").innerHTML="請輸入帳號";
        return false; 
    }else if (password.length == 0) { 
        document.getElementById("result").innerHTML="請輸入密碼";
        return false; 
    }else{
        return true; 
    }
}