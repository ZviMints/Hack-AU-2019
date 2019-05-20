function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

// Create Time:
var tr = document.createElement('TR');
tr.style.backgroundColor = "gray"; 
tableBody.appendChild(tr);
var td = document.createElement('TD');
td.width = '130';
tr.appendChild(td);
for (var j = 0; j < 7; j++) {
  var td = document.createElement('TD');
  td.width = '130';
  td.appendChild(document.createTextNode("יום" + "-" + (j+1)));
  tr.appendChild(td);
}


var time = 9;
var time2 = 10;
  for (var i = 0; i < 15; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    var td = document.createElement('TD');
    td.width = '130';
    td.style.backgroundColor = "gray"; 
    td.appendChild(document.createTextNode(time + "-" + time2));
    tr.appendChild(td);
    time++;
    time2++;

    for (var j = 0; j < 7; j++) {
      var td = document.createElement('TD');
      td.width = '130';
      td.appendChild(document.createTextNode("Cell " + (i+9) + "," + (j+1)));
      if( (i + j)%7 == 0) {
        td.style.background = "yellow";
        td.innerHTML = "Sup"
      }
      // td.id = (i+9)+"-"+(j+1);
      td.id = "Tzvi";
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}
addTable();