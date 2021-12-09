function processFormData() {
    let table = document.getElementById("tableee");
    let newRow = table.insertRow();

    let cellNO = newRow.insertCell();
    let cellrole = newRow.insertCell();
    let cellnum = newRow.insertCell();
    let cellcross = newRow.insertCell();
    let QQQ = newRow.insertCell();
    let QQQQ = newRow.insertCell();

        let NO1 = document.getElementById("NO");
        let role1 = document.getElementById("role");
        let num1 = document.getElementById("num");
        let cross1 = document.getElementById("cross");

        cellNO.innerHTML = NO1.value;
        cellrole.innerHTML = role1.value;
        cellnum.innerHTML = num1.value;
        cellcross.innerHTML = cross1.value;

  }