// function check() {
//     var form = document.getElementById('login-form'); 
//     var account = form.account.value
//     var password = form.password.value

//     if (account.length == 0 && password.length == 0) {
//         document.getElementById("result").innerHTML="請輸入帳號和密碼";
//         return false; 
//     }else if (account.length == 0) { 
//         document.getElementById("result").innerHTML="請輸入帳號";
//         return false; 
//     }else if (password.length == 0) { 
//         document.getElementById("result").innerHTML="請輸入密碼";
//         return false; 
//     }else{
//         return true; 
//     }
// }

$("#login-form").on("submit", function (e) {
    e.preventDefault();
    var dataList = $(this).serializeArray();
    var formData = {};
    dataList.forEach(function (data) {
        formData[data.name] = data.value;
    });
    
    let loginUser;
    window.DB.forEach(function (user) {
        if (formData.account === user.account && formData.password === user.password) {
            loginUser = user;
        }else if(formData.account.length == 0 && formData.password.length == 0){
            document.getElementById("result").innerHTML="請輸入帳號和密碼";
        }else if(formData.account.length == 0 ){
            document.getElementById("result").innerHTML="請輸入帳號";
        }else if(formData.password.length == 0){
            document.getElementById("result").innerHTML="請輸入密碼";
        }else{
            document.getElementById("result").innerHTML="請輸入正確帳號和密碼!";
        }
    });
    // (
    //     user.password === formData.password &&
    //     user.account === formData.account
    //     ) 
        
        if (!loginUser) {
            // do nothing
        } else {
            document.getElementById("result").innerHTML="登入成功！";
            localStorage.setItem("id", loginUser.id);
            location.href = "A100.html";
        }
    });
