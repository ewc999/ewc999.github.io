const snowman = document.getElementById('snowman');

snowman.addEventListener('mouseover', () => {
    snowman.style.animation = 'bounceSnowman 1s ease-out forwards'; /* Adjust duration as needed */
});

snowman.addEventListener('animationend', () => {
    snowman.style.animation = 'none'; /* Resets the animation once it finishes */
});

function toggleWhiteElephant() {
    document.getElementById('white-elephant-content').classList.toggle('hidden');
}
document.getElementById("white-elephant-button").onclick = toggleWhiteElephant;
function toggleGifts() {
    document.getElementById('individual-gifts').classList.toggle('hidden');
}
document.getElementById("kid-gift-button").onclick = toggleGifts;
