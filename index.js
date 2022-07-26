const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20



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
grid.appendChild(user)