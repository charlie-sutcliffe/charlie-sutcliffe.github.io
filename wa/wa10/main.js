const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['images/alaska3.png', 'images/faceshot.png', 'images/leftTurn.png', 'images/pillowLine.png', 'images/fieldgoalCork.png'];

/* Declaring the alternative text for each image file */
const altText = ['mid-air silouette', 'deep turn', 'epic left turn', 'what goes up...', 'flippin out'];


/* Looping through images */
for(let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText[i]);
    newImage.addEventListener("click", function() {
        displayedImage.setAttribute('src', images[i]);
        displayedImage.setAttribute('alt', altText[i]);
    });
    thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    if(btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});