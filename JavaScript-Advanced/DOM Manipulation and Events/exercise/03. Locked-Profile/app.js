function lockedProfile() {

    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            const infoDIV = profile.querySelector('div');

            if (e.target.textContent == 'Show more') {
                infoDIV.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDIV.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}