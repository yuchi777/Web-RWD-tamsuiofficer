function addcheck() {
    var addform = document.getElementById('addform'); 
    var addmode = addform.addmode.value
    var addnumber = addform.addnumber.value
    var add1 = addform.add1.value
    var date1 = addform.date1.value
    var date2 = addform.date2.value
    var add2 = addform.add2.value
    var add3 = addform.add3.value
    var addtext = addform.addtext.value
    var addimg = addform.addimg.value


    if (addmode.length == 0) {
        document.getElementById("result").innerHTML="請輸入模組名稱";
        return false; 
    }else if (addnumber.length == 0) { 
        document.getElementById("result").innerHTML="請輸入公共模組編號";
        return false; 
    }else if (add1.length == 0) { 
        document.getElementById("result").innerHTML="請選擇是否輪播";
        return false; 
    }else if (date1.length == 0) { 
        document.getElementById("result").innerHTML="請輸入生效日期";
        return false; 
    }else if (date2.length == 0) { 
        document.getElementById("result").innerHTML="請輸入失效日期";
        return false; 
    }else if (add2.length == 0) { 
        document.getElementById("result").innerHTML="請選擇是否有效";
        return false; 
    }else if (add3.length == 0) { 
        document.getElementById("result").innerHTML="請選擇是否置頂";
        return false; 
    }else if (addtext.length == 0) { 
        document.getElementById("result").innerHTML="請輸入訊息內容";
        return false; 
    }else if (addimg.length == 0) { 
        document.getElementById("result").innerHTML="請上傳圖片";
        return false; 
    }else{
        return true; 
    }
}

function editorcheck() {
    var editorform = document.getElementById('editorform'); 
    var editormode = editorform.editormode.value
    var editornumber = editorform.editornumber.value
    var editor1 = editorform.editor1.value
    var date3 = editorform.date3.value
    var date4 = editorform.date4.value
    var editor2 = editorform.editor2.value
    var editor3 = editorform.editor3.value
    var editortext = editorform.editortext.value
    var editorimg = editorform.editorimg.value


    if (editormode.length == 0) {
        document.getElementById("result1").innerHTML="請輸入模組名稱";
        return false; 
    }else if (editornumber.length == 0) { 
        document.getElementById("result1").innerHTML="請輸入公共模組編號";
        return false; 
    }else if (editor1.length == 0) { 
        document.getElementById("result1").innerHTML="請選擇是否輪播";
        return false; 
    }else if (date3.length == 0) { 
        document.getElementById("result1").innerHTML="請輸入生效日期";
        return false; 
    }else if (date4.length == 0) { 
        document.getElementById("result1").innerHTML="請輸入失效日期";
        return false; 
    }else if (editor2.length == 0) { 
        document.getElementById("result1").innerHTML="請選擇是否有效";
        return false; 
    }else if (editor3.length == 0) { 
        document.getElementById("result1").innerHTML="請選擇是否置頂";
        return false; 
    }else if (editortext.length == 0) { 
        document.getElementById("result1").innerHTML="請輸入訊息內容";
        return false; 
    }else if (editorimg.length == 0) { 
        document.getElementById("result1").innerHTML="請上傳圖片";
        return false; 
    }else{
        return true; 
    }
}