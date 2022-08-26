"use strict";
function generateTable() {
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  let counter = 1;
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("td");
      cell.innerText = counter++;
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}
generateTable();
