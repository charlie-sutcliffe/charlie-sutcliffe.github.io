var character = document.getElementById("character");
var block = document.getElementById("block");

var startButton = document.getElementById("start-button")
startButton.addEventListener('click', event => {
    start()
})

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
      jump()
    }
  })

function jump(){
    if (character.classList=="animate"){
        return;
    }
    character.classList.add("animate");
    setTimeout(removeJump, 450);
};

function removeJump(){
    character.classList.remove("animate");
};

var titleScreen = document.getElementById("title-screen");

function start(){
    titleScreen.style.display = "none";
    block.classList.add("animateBlocks");
}

function checkDead(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=230){
        alert("Game over");
        block.classList.remove("animateBlocks");
        titleScreen.style.display = "block";
    }
};

setInterval(checkDead, 10);
