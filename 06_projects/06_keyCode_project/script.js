window.addEventListener("keydown", (e) => {
  document.getElementById("table-container").innerHTML = `
  <table>
  <tr>
    <th>Code</th>
    <th>Key</th>
    <th>KeyCode</th>
    
  </tr>
  <tr>
    <td>${e.code}</td>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
  </tr>
  
</table>
  `;
});
