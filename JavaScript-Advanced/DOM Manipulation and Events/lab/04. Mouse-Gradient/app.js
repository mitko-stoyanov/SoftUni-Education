function attachGradientEvents() {
    const gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', onMouseOver)

    function onMouseOver(event) {
        const result = Math.floor(event.offsetX / gradient.clientWidth * 100)
        document.getElementById('result').textContent = result + '%';
    } 
}