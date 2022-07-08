function addItem() {
    const content = document.getElementById('newItemText').value;
    const liElement = document.createElement('li');
    liElement.textContent = content;
    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
    document.getElementById('newItemText').value = '';
}