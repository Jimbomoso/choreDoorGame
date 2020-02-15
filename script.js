const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';


let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => {
    if (door.src === botDoorPath) {
      return true;
    } else {
      return false;
    }
  };

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
      return false;
    } else {
      return true;
    }
  };
  
  const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
      gameOver('win');
    } else if (isBot(door)) {
      gameOver();
    };
  };

doorImage1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
    } else {
      return true;
    }
  };
  
  doorImage2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
      doorImage2.src = openDoor2;
    playDoor(doorImage2);
    } else {
      return true;
    }
  };
  
  doorImage3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
      doorImage3.src = openDoor3;
    playDoor(doorImage3);
    } else {
      return true;
    }
  };

if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  };
};

const randomChoreGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
        return choreDoor;
    } else if (choreDoor === 1) {
        openDoor1 = spaceDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 2) {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }
};

const gameOver = (status) => {
    if (status === 'win') {
      startButton.innerHTML = 'You win! Play again?';
    } else {
      startButton.innerHTML = 'Game over! Play again?';
    };
    currentlyPlaying = false;
  };
