//about popup
document.addEventListener('DOMContentLoaded', () => {

const aboutButton = document.getElementById('aboutButton');
const aboutPopup = document.getElementById('aboutMe');
const closeAbout = document.getElementById('closeAbout');

if (aboutButton) {
    aboutButton.onclick = openPopup;
    closeAbout.onclick = openPopup;
}


function openPopup(){
    aboutPopup.classList.toggle("active");
    backgroundOverlay.classList.toggle("active");
}

});
