// creating the close button and append it to each list item
var list = document.getElementsByTagName("LI");
var l;
for (l = 0; l < list.length; l++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[l].appendChild(span);
}


// clicking on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var l;
for (l = 0; l < close.length; l++) {
  close[l].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// adding a checked symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// creating a new list item when clicking on the "add" button
function newElement() {

  var li = document.createElement("li");
  var inputValue = document.getElementById("firstInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("ul").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (l = 0; l < close.length; l++) {
    close[l].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}