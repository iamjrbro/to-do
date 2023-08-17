// creating the close button and append it to each list item
var list = document.getElementsByTagName("LI");
for (var l = 0; l < list.length; l++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[l].appendChild(span);
}

// Clicking on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var l = 0; l < close.length; l++) {
  close[l].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Adding a checked symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Getting date and time
function getDataAndTime() {
  var now = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return now.toLocaleDateString('pt-BR', options);
}

// Saving item to local storage
function saveInfo(item) {
  var savedItems = JSON.parse(localStorage.getItem('listItems')) || [];
  savedItems.push(item);
  localStorage.setItem('listItems', JSON.stringify(savedItems));
}

// Loading all saved items from local storage when the page loads
window.onload = function() {
  var savedItems = JSON.parse(localStorage.getItem('listItems')) || [];
  var ul = document.getElementById('ul');
  for (var i = 0; i < savedItems.length; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(savedItems[i]));
    ul.appendChild(li);
  }
};

// Creating a new list item when clicking on the "add" button or pressing Enter
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("firstInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ul").appendChild(li);
    saveInfo(inputValue); // Save the new item to local storage
  }
  document.getElementById("firstInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Creating a new list item when pressing Enter in the input field
document.getElementById('firstInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    newElement();
  }
});
