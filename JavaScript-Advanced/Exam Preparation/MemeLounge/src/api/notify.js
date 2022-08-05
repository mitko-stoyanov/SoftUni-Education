const errorBox = document.getElementById('errorBox');

export const notificationHandler = (message) => {
    errorBox.style.display = 'block';
    errorBox.querySelector('span').textContent = message;

    setTimeout(() => {
        errorBox.style.display = 'none';
    }, 3000);
}