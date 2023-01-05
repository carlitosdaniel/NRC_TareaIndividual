//JSON
function Json() {
  const obj = { name: "Daniel", age: 23, city: "Quito-Ecuador" };
  const myJSON = JSON.stringify(obj);
  document.getElementById("demo").innerHTML = myJSON;
}

//AJAX
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}