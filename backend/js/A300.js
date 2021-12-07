async function getUsers() {
    let url = 'A300.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(A300 => {
        let htmlSegment = `
           <div class="A300">
             <table>
               <thead>
                 <tr>
                   <td><a href="./A400.html"><img src="${A300.a300_img}"></td>
                   
                   <td>${A300.a300_1} </td>
                   <td>${A300.a300_2} </td>
                   <td>${A300.a300_3} </td>
                   <td>${A300.a300_4} </td>
                   <td>${A300.a300_5} </td>
                   <td>${A300.a300_6} </td>
                   <td></td>
                   <td>${A300.a300_7} </td>
                   <td>${A300.a300_8} </td>
                 </tr> 
               </thead>
             </table>
           </div>`;

        html += htmlSegment;
    });

    let A300table = document.querySelector('.A300table');
    A300table.innerHTML = html;
}

renderUsers();