let tbody = document.getElementById("employeeList");
selectedRow = tbody.firstElementChild;
counter = 0;
function collectData() {
  if (counter == 0) {
    //means no row no edit first entry of row
    var data = dataOrigin();
    checkName();
    if (empName.value === "") {
      let hide = document.getElementById("hide");
      hide.removeAttribute("hidden");
    } else {
      //means row edit
      hide.setAttribute("hidden", "");
      newRow(data);
      resetEmployee();
    }
  } else {
    selectedRow.remove(); //remove old-row
    var data = dataOrigin();
    newRow(data);
    resetEmployee();
  }
}
function dataOrigin() {
  var data = {}; //set of object
  let form = document.getElementById("first-form"),
    empName = document.getElementById("empName"),
    empCode = document.getElementById("empCode"),
    Salary = document.getElementById("Salary"),
    position = document.getElementById("position");
  data["empName"] = empName.value;
  data["empCode"] = empCode.value;
  data["Salary"] = Salary.value;
  data["position"] = position.value;
  return data;
}
function newRow(employer) {
  let tbody = document.getElementById("employeeList");
  table = tbody.insertRow(0); //set of new entry (row)
  cell1 = table.insertCell(0);
  cell1.innerHTML = employer.empName;
  cell2 = table.insertCell(1);
  cell2.innerHTML = employer.empCode;
  cell3 = table.insertCell(2);
  cell3.innerHTML = employer.Salary;
  cell4 = table.insertCell(3);
  cell4.innerHTML = employer.position;
  cell5 = table.insertCell(4);
  cell5.innerHTML = `<a onclick="resetEmployee();editEmp(this)">edit</a> <a onclick="deleteElement(this);resetEmployee();">remove</a>`; //set of edit & delete anchors
}
function resetEmployee() {
  document.getElementById("empName").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("Salary").value = "";
  document.getElementById("position").value = "";
}
function editEmp(OldData) {
  selectedRow = OldData.parentElement.parentElement;
  let tbody = document.getElementById("employeeList");
  document.getElementById("empName").value = cell1.innerHTML;
  document.getElementById("empCode").value = cell2.innerHTML;
  document.getElementById("Salary").value = cell3.innerHTML;
  document.getElementById("position").value = cell4.innerHTML;
  counter++;
}
function deleteElement(element) {
  tbody.deleteRow(0); //delte of row
}
function checkName() {}
