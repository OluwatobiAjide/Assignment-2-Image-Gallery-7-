const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
var i = 1
for (i = 1; i <= 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i + ".jpg");
    thumbBar.appendChild(newImage);
    newImage.oneclick = function(e){
        displayedImage.src = e.target.src;
    }
}


/* Wiring up the Darken/Lighten button */
