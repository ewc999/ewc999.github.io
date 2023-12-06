const snowman = document.getElementById('snowman');

snowman.addEventListener('mouseover', () => {
    snowman.style.animation = 'bounceSnowman 1s ease-out forwards';
});

snowman.addEventListener('animationend', () => {
    snowman.style.animation = 'none'; /* Resets the animation once it finishes */
});
