// Declare variables for images and game objects
let mazeImg, pacmanImg, redGhostImg, pinkGhostImg, blueGhostImg, orangeGhostImg;
let pacman, ghosts;

// Load all images before the game starts
function preload() {
    mazeImg = loadImage('images/pacmannewmap.png');
    pacmanImg = loadImage('images/pacman.png');
    redGhostImg = loadImage('images/REDPAC.png');
    pinkGhostImg = loadImage('images/PACPINK.png');
    blueGhostImg = loadImage('images/pacMANBLUE.png');
    orangeGhostImg = loadImage('images/ORANGEPAC.png');
}

// Set up the canvas and initial game state
function setup() {
    // Create canvas based on maze size (adjust if pacmannewmap.png differs)
    createCanvas(448, 496); // Common Pac-Man maze size
    // Initialize Pac-Man and ghosts with starting positions
    pacman = { x: 200, y: 300, img: pacmanImg, speed: 5 };
    ghosts = [
        { x: 180, y: 200, img: redGhostImg },
        { x: 220, y: 200, img: pinkGhostImg },
        { x: 180, y: 240, img: blueGhostImg },
        { x: 220, y: 240, img: orangeGhostImg }
    ];
}

// Draw the game elements continuously
function draw() {
    background(0); // Black background
    image(mazeImg, 0, 0); // Draw the maze
    image(pacman.img, pacman.x, pacman.y, 32, 32); // Draw Pac-Man
    ghosts.forEach(ghost => {
        image(ghost.img, ghost.x, ghost.y, 32, 32); // Draw each ghost
    });
}

// Handle Pac-Man movement with arrow keys
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        pacman.x -= pacman.speed;
    } else if (keyCode === RIGHT_ARROW) {
        pacman.x += pacman.speed;
    } else if (keyCode === UP_ARROW) {
        pacman.y -= pacman.speed;
    } else if (keyCode === DOWN_ARROW) {
        pacman.y += pacman.speed;
    }
}
