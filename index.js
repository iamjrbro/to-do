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


//creating a new list item when clicking a new element
document.getElementById('firstInput').addEventListener('keyup', function(event){
  if(event.key === 'Enter'){
    newElement();
  }
});


//getting date and time


/*In the above code, I've added a new function getCurrentDateAndTime that returns the current date and time in a formatted string. I've modified the newElement function to use this formatted date and time along with the user's input when creating a new list item. Additionally, I've added an event listener to the input field to trigger the newElement function when the Enter key is pressed.

Please note that this code assumes you have an HTML input element with the ID "firstInput" for the user to enter new items. Also, make sure you have an element with the ID "ul" for appending the new list items. You may need to adjust the IDs and HTML structure accordingly.*/

function getDataandTime(){
  var now = new Date();
  var options = {weekday: 'long', year: 'numeric', month:'long', day: 'numeric', hour:'2-digit', minute:'2-digit',};
  return now.toLocaleDateString('pt-BR', options)
}


//saving it to the memorie
function saveInfo(item){
  var saveItens = JSON.parse(localStorage.getItem('listItems')) || [];
  savedItens.push(item);
  localStorage.setItem('listItens', JSON.stringify(savedItens));
}


//loading all saved itens from the store page when it loads
window.onload = function(){
  var saveItens = JSON.parse(localStorage.getItem('listItens')) || [];
  var ul = document.getElementById('ul')
  for (var i = 0; i < saveItens.length; i++){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(saveItens[i]));
    ul.appendChild(li);
  }
}




/*In this code, the saveToList function takes care of adding a new item to the local storage. The window.onload function is used to load the saved items from local storage and populate the list when the page loads.

Remember to adjust your HTML structure accordingly and ensure that you have an element with the ID "ul" for appending the list items.*/