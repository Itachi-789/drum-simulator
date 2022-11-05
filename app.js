let audio = document.getElementById("myAudio")
let musicOff = document.getElementById("MusicOFF")
let musicOn = document.getElementById("MusicON")
function audioPlay(){
    audio.play()
    musicOn.style.display = "block"
    musicOff.style.display = "none"
}

function audioPause(){
    audio.pause()
    musicOff.style.display = "block"
    musicOn.style.display = "none"
}

function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
        if(!audio) return 
        console.log(e)
        audio.currentTime = 0
        audio.play()
        key.classList.add('playing')
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)