function preload() {
    mazeImg = loadImage('content/images/pacmannewmap.png');
    pacmanSprite = loadImage('content/images/pacman.png');
    ghostSprites = {
        'red': loadImage('content/images/REDPAC.png'),
        'pink': loadImage('content/images/PACPINK.png'),
        'blue': loadImage('content/images/pacMANBLUE.png'),
        'orange': loadImage('content/images/ORANGEPAC.png')
    };
    introSound = loadSound('content/sounds/intro.mp3');
    eatPelletSound = loadSound('content/sounds/eatPellet.mp3');
    eatPowerPelletSound = loadSound('content/sounds/eatPowerPellet.mp3');
    eatGhostSound = loadSound('content/sounds/eatGhost.mp3');
    deathSound = loadSound('content/sounds/death.mp3');
}