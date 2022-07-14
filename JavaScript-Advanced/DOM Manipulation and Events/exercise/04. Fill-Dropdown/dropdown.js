function addItem() {
    const textArea = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const newOptionElement = document.createElement('option');
   
    newOptionElement.textContent = textArea.value;
    newOptionElement.value = value.value;
   
    document.getElementById('menu').appendChild(newOptionElement);
   
    textArea.value = '';
    value.value = '';
}