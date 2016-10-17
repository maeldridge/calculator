/*global math*/

var array = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '-', '0', '.', '+', '/', '='];

function createall() {
  var divcreator = document.createElement('div');
  divcreator.appendChild(create());
  document.body.appendChild(divcreator);
}

function create() {
  var create = document.createElement('div');
  var input = document.createElement('input');
  input.id = 'input';
  create.appendChild(input);

  array.forEach(function(content) {
  var button = document.createElement('button');
  button.id = content;
  button.appendChild(document.createTextNode(content));
  button.addEventListener('click', clicked, false);
  create.appendChild(button);
  });
  return create;
}

function clicked(event){
    var input = document.getElementById('input');
    if(event.target.id == '='){
        input.value = math.eval(input.value);
    } else {
        input.value = input.value + event.target.id;
    }
}

createall();