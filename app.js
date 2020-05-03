const canvas = document.querySelector(".draw")
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BASA55";
ctx.lineJoin = "round";
ctx.lineCap = "round"
ctx.lineWidth = "50"


//when person is clicking down on canvas. True when you click down
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (event) => {
    //stop the function from running if mouse is not moving
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    //date variables
    lastX = event.offsetX;
    lastY = event.offsetY;
    //increase hue
    hue++
    //reset hue at end of spektrum
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction
    }
    if (direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }



}




//event listeners
canvas.addEventListener("mousemove", draw)

canvas.addEventListener("mousedown", (event) => {
    //so drawing starts at original mouse down and not top left and starts again on new mousedown rather than continual line
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
})
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
})
//leave the canvas
canvas.addEventListener("mouseout", () => {
    isDrawing = false;
})