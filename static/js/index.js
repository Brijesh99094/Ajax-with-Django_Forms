window.onload = initAll;

function initAll() {
  const SaveBtn = document.getElementById("saveBook");
  const r = document.getElementById("result");
  SaveBtn.onclick = SaveBook;
}

function ShowAllBooks() {
  var url = "/ShowAllBooks";
  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = eval(req.responseText);

      var div1 = document.getElementById("profile");
      div1.innerHTML = "";
      var table = document.createElement("TABLE");

      var row = table.insertRow(0);

      var name = row.insertCell(0);
      var price = row.insertCell(1);
      var pages = row.insertCell(2);
      var del = row.insertCell(3);

      name.innerHTML = "<strong>Book name</strong>";
      price.innerHTML = "<strong>Price</strong>";
      pages.innerHTML = "<strong>Pages</strong>";
      del.innerHTML = "<strong>Delete</strong>";

      for (var i = 0; i < data.length; i++) {
        var row = table.insertRow(i + 1);

        var name = row.insertCell(0);
        var price = row.insertCell(1);
        var pages = row.insertCell(2);
        var del = row.insertCell(3);

        name.innerHTML = data[i].name;
        price.innerHTML = data[i].price;
        pages.innerHTML = data[i].pages;
        del.id = data[i].id;
        del.innerHTML = "<i class='fa fa-trash mr-3'></i>"; //<p style='width:20px;color:red' >✖</p>
        del.style.fontSize = "20px";
        del.style.cursor = "pointer";
        del.className = "dltbtn";
        del.onclick = function () {
          var obj = this;
          var id = this.id;
          var url = "/deletebook?id=" + id;
          var req = new XMLHttpRequest();
          req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              if (req.responseText == "true") {
                table.deleteRow(obj.parentNode.rowIndex);
              }
            }
          };
          req.open("GET", url, true);
          req.send();
        };
      }
      table.className = "table table-striped";
      div1.appendChild(table);
    }
  };
  req.open("GET", url, true);
  req.send();
}

function SaveBook() {
  var b_name = document.getElementById("book_name").value;
  var price = document.getElementById("price").value;
  var pages = document.getElementById("pages").value;

  if (b_name == "") {
    document.getElementById("bname").innerHTML =
      "<p style='color:red'>Book name can not be empty<p>";
    return false;
  }
  if (price == "") {
    document.getElementById("pprice").innerHTML =
      "<p style='color:red'>Book price can not be empty<p>";
    return false;
  }
  if (pages == "") {
    document.getElementById("ppages").innerHTML =
      "<p style='color:red'>Book pages can not be empty<p>";
    return false;
  }

  var url = "/saveBook?name=" + b_name + "&price=" + price + "&pages=" + pages;

  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (req.responseText == "true") {
        var b_name = (document.getElementById("book_name").value = "");
        var price = (document.getElementById("price").value = "");
        var pages = (document.getElementById("pages").value = "");

        document.getElementById("result").innerHTML =
          "Book saved success Fully";
      }
    }
  };
  req.open("GET", url, true);
  req.send();
}
