function extractText() {
    const listItem = [...document.querySelectorAll('li')];
    result = listItem.map(item => item.textContent).join('\n');
    document.getElementById('result').value = result;
}