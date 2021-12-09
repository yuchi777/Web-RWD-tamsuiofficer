$("#header").html(`
<div class="header">
    <div class="title">
        <a href="./A100.html" class="bd_index">
            <h2>新市鎮檔案數位化系統</h2>
        </a>
        <a href="../frontend/index.html">前臺首頁</a>
    </div>
    <div class="nav_bar">
        <nav>
            <ul>
                <li class="user-status common"><a href="./B100.html">新聞傳播及活動消息管理</a></li>
                <li class="user-status common"><a href="./C100.html">詮釋資料管理</a></li>
                <li class="user-status admin"><a style="cursor: pointer;" >系統管理</a>
                <ul>
                    <li><a href="./D100.html">帳號管理</a></li>
                    <li><a href="./D200.html">權限管理</a></li>
                    <li><a href="./D300.html">系統紀錄</a></li>
                </ul>
                </li>
            </ul>
        </nav>
        <a class="user-status log_out mr-2" href="L100.html" type="submit">登出</a>
        <p class="mx-1">|</p>
        <p class="user-status admin mr-2">系統管理員</p>
        <p class="user-status normal mr-2">維護專員</p>
        </div>
        </div>
        `);

var id = localStorage.getItem("id");
console.log(id);

// 沒登入直接輸入網址
if (!id){
    document.location.href="L100.html";
    $(".user-status").hide();
}

// 登入驗證會員
if (id) {
  var loginUSer = window.DB.find(function (dbData) {
    return dbData.id === id;
  });
  if (!loginUSer || window.location.pathname === "/") {
  } else if (loginUSer.isAdmin) {
    $(".admin").show();
    $(".common").show();
    $(".log_out").show();
    $(".access_rights").hide();
    $(".normal").hide();
    
  } else {
    $(".admin").hide();
    $(".common").show();
    $(".log_out").show();
    $(".D-series").hide();
    $(".access_rights").show();
    if ($(".access_rights").show() && window.location.pathname.includes("D")) {
        setTimeout(function(){ history.go(-1)} ,3000)
    };
  }
}


// 登出清除local storage資料
$(".log_out").click(function(){
    localStorage.clear();
});