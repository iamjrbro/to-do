// Selecionando todos os elementos LI
var list = document.getElementsByTagName("LI");

// Adicionando um botão de fechar a cada item da lista
for (var l = 0; l < list.length; l++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[l].appendChild(span);
}

// Adicionando a funcionalidade de fechar ao botão
var close = document.getElementsByClassName("close");
for (var l = 0; l < close.length; l++) {
  close[l].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Adicionando a funcionalidade de marcação ao clicar em um item da lista
var ul = document.getElementById('ul');
ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Adicionando um novo item à lista ao clicar no botão "Add"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("firstInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("Você deve escrever algo!");
  } else {
    document.getElementById("ul").appendChild(li);
    saveInfo(inputValue);
  }

  // Adicionando o botão de fechar ao novo item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Adicionando a funcionalidade de fechar ao novo botão de fechar
  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Adicionando um novo item à lista ao pressionar Enter
document.getElementById('firstInput').addEventListener('keyup', function(event){
  if(event.key === 'Enter'){
    newElement();
  }
});

// Obtendo a data e hora
function getDataandTime() {
  var now = new Date();
  var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
  return now.toLocaleDateString('pt-BR', options);
}

// Salvando informações na memória
function saveInfo(item) {
  var saveItems = JSON.parse(localStorage.getItem('listItems')) || [];
  saveItems.push(item);
  localStorage.setItem('listItems', JSON.stringify(saveItems));
}

// Carregando todos os itens salvos da memória ao carregar a página
window.onload = function(){
  var savedItems = JSON.parse(localStorage.getItem('listItems')) || [];
  var ul = document.getElementById('ul');
  for (var i = 0; i < savedItems.length; i++){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(savedItems[i]));
    ul.appendChild(li);
  }
}

