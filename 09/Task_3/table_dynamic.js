// function createMatrix(rows, cols) {
//     const matrix = [];
  
//     for (let i = 0; i < 10; i++) {
//       matrix[i] = [];
  
//       for (let j = 0; j < 10; j++) {
//         matrix[i][j] = i * 10 + j + 1;
//       }
//     }
  
//     return matrix;
//   };
function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 10; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 10; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`${matrix}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  };
generateTable();
