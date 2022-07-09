function addItem() {
    const inputField = document.getElementById('newItemText');

    if (inputField.value.trim() == '') {
        return;
    }

    const li = document.createElement('li');
    li.textContent = inputField.value;

    const button = document.createElement('a');
    button.textContent = '[Delete]';
    button.href = '#';
    button.addEventListener('click', onClick);

    li.appendChild(button);
    document.getElementById('items').appendChild(li);

    inputField.value = '';

    function onClick(ev) {
        const parent = ev.target.parentNode;
        parent.remove();
    }
}