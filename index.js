const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 560
const ballDiameter = 20
const boardHeight = 300
let timerId
let xDirection = -2
let yDirection = 2

const userStart = [230, 10] // where the user will always start from
let currentPosition = userStart


const ballStart = [270, 40]
let ballCurrentPosition = ballStart


//create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis,yAxis +blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]

    }
// we can know where the corners of the block is on our grid at all times using the bottom left x, y axis
}

const blocks = [
    new Block(10, 270), // from this we get all four points that create our block
    new Block(120, 270), 
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240), 
    new Block(120, 240), 
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210), 
    new Block(120, 210), 
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),

]


//draw all my blocks
function addBlocks() {
    for (let i = 0; i<blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px' //in the blocks array we get the first item i we get the x axis and assign it to the left as the first item i.e 10
    block.style.bottom = blocks[i].bottomLeft[1] + 'px' //we get the 2nd value(y axis) from the bottom left corner i.e 270
    grid.appendChild(block)
    }
}

addBlocks()

//add user
const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)


//draw the user
function drawUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}


//draw the ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}



//move user
function moveUser(e) {
    switch(e.key){
        case 'ArrowLeft':
            if (currentPosition[0] > 0) { 
            currentPosition[0] -= 10
            drawUser()
            }
            break;
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth) {
            currentPosition[0] += 10
            drawUser()
            }
            break;

    } // event to listen out for tap of key either left or right
}

document.addEventListener('keydown', moveUser)


//add ball

const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)


// move the ball
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions() 
}

timerId = setInterval(moveBall, 30)

//check for collisions
function checkForCollisions() {
    //check for wall collisions
    if (ballCurrentPosition[0] >= (boardWidth -  ballDiameter) ||
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
        ballCurrentPosition[0] <= 0
        ) {
        changeDirection()

    } // if its larger then its off the grid and we need to change the direction

    //check for gamme over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId)
        scoreDisplay.innerHTML = 'You Lose!'
        document.removeEventListener('keydown', moveUser)
    }
}

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
    }
     if (xDirection === 2 && yDirection === -2){
         xDirection = -2
         return
     }
     if (xDirection === -2 && yDirection === -2) {
         yDirection = 2
         return
     }
     if (xDirection === -2 && yDirection === 2) {
         xDirection = 2
         return
     }

}