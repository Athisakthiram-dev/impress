document.getElementById('clickMe').addEventListener('click', () => {
    const messageDiv = document.getElementById('message');
    const bgMusic = document.getElementById('bgMusic');
    messageDiv.classList.remove('hidden');
    bgMusic.play();
});
