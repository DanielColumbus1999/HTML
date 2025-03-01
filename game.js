const car = document.getElementById('car');
const gameContainer = document.getElementById('game-container');
const road = document.getElementById('road');

let carPosition = { x: 50, y: 500 }; // Position of the car (centered at the bottom)
let speed = 2; // Car speed
let moveLeft = false;
let moveRight = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveLeft = true;
    }
    if (e.key === 'ArrowRight') {
        moveRight = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
        moveLeft = false;
    }
    if (e.key === 'ArrowRight') {
        moveRight = false;
    }
});

function gameLoop() {
    if (moveLeft && carPosition.x > 0) {
        carPosition.x -= speed;
    }

    if (moveRight && carPosition.x < gameContainer.offsetWidth - car.offsetWidth) {
        carPosition.x += speed;
    }

    car.style.left = carPosition.x + 'px';
    requestAnimationFrame(gameLoop);
}

gameLoop(); // Start the game loop
