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

$("#login-form").on("submit", function (e) {
    e.preventDefault();
    $(".user-status").hide();
    var dataList = $(this).serializeArray();
    var formData = {};
    dataList.forEach(function (data) {
        formData[data.name] = data.value;
    });
    
    let loginUser;
    window.DB.forEach(function (user) {
        if (
            user.password === formData.password &&
            user.account === formData.account
            ) {
                loginUser = user;
            }
        });
        
        if (!loginUser) {
            // do nothing
        } else {
            localStorage.setItem("id", loginUser.id);
            location.href = "A100.html";
        }
    });
