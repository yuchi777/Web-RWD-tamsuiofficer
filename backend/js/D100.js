function processFormData() {
    let table = document.getElementById("tablee");
    let newRow = table.insertRow();

    let cellaccount = newRow.insertCell();
    let cellID = newRow.insertCell();
    let cellservice = newRow.insertCell();
    let cellrole = newRow.insertCell();
    let celldate = newRow.insertCell();
    let cellpasswordlast = newRow.insertCell();
    let cellfinaldate = newRow.insertCell();
    let celllastin = newRow.insertCell();
    let cellQQ = newRow.insertCell();
    let cellmove = newRow.insertCell();

        let account1 = document.getElementById("account");
        let id1 = document.getElementById("id");
        let service1 = document.getElementById("service");
        let role1 = document.getElementById("role");
        let date1 = document.getElementById("date");

        cellaccount.innerHTML = account1.value;
        cellID.innerHTML = id1.value;
        cellservice.innerHTML = service1.value;
        cellrole.innerHTML = role1.value;
        celldate.innerHTML = date1.value;
        cellmove.innerHTML = $("addbtn").click(function(){ 
            $("td").html("Hello <b>world</b>!"); 
            });

  }