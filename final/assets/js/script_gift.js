
function toggleWhiteElephant() {
    document.getElementById('white-elephant-content').classList.toggle('hidden');
}
document.getElementById("white-elephant-button").onclick = toggleWhiteElephant;
function toggleGifts() {
    document.getElementById('individual-gifts').classList.toggle('hidden');
}
console.log(document.getElementById('kid-gift-button'));
document.getElementById('kid-gift-button').onclick = toggleGifts;