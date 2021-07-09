const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

let itemArray = []
if (localStorage.getItem('items')) {
  itemArray = JSON.parse(localStorage.getItem('items'));
} else {
  itemsArray = [];
}

localStorage.setItem('items', JSON.stringify(itemArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {

  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);

}



function work() {

  itemArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemArray));
  liMaker(input.value);
  input.value = "";
}

data.forEach((item) => {
  liMaker(item);

});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
  itemArray = [];
})































