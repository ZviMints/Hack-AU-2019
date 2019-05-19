function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

// Create Time:
var tr = document.createElement('TR');
tr.style.backgroundColor = "blue"; 
tableBody.appendChild(tr);
var td = document.createElement('TD');
td.width = '75';
tr.appendChild(td);
for (var j = 0; j < 7; j++) {
  var td = document.createElement('TD');
  td.width = '75';
  td.appendChild(document.createTextNode("יום" + "-" + (j+1)));
  tr.appendChild(td);
}


  for (var i = 0; i < 15; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    var time = "08:00";
    var time2 = "10:00";
    var td = document.createElement('TD');
    td.width = '75';
    td.style.backgroundColor = "blue"; 
    td.appendChild(document.createTextNode(time + "-" + time2));
    tr.appendChild(td);

    for (var j = 0; j < 7; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode("Cell " + i + "," + j));
      td.id = i+","+j;
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}
addTable();