//add event listener to check for key press
window.addEventListener('keydown', function(e) {        
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    //play sound when each key is pressed
    if(!sound)return;
    sound.currentTime = 0;
    sound.play();
    
    //add class when button pressed   
    key.classList.add("playing");
});

//function to remove css added when clicked
function removeTransition(e) {
    if(e.propertyName !== 'transform')
        return;

    //remove class list to make div back to normal 
    this.classList.remove('playing');
}

//get keys pressed
const keys = document.querySelectorAll('.key');

//for each loop to call function to remove transform
keys.forEach(key => key.addEventListener('transitionend', removeTransition));