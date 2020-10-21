console.log("Drawing app loaded.")

let stickEl = document.getElementById("stick")
let zillaEl = document.getElementById("zilla")

let drawing = 1

let stickXOffset = 0
let stickYOffset = 0

let stickXVel = 5
let stickYVel = 5

function stickClick () {
    drawing = 1
    stickEl.classList.add("remove")
    zillaEl.classList.remove("remove")
}

function zillaClick () {
    drawing = 2
    stickEl.classList.remove("remove")
    zillaEl.classList.add("remove")
}

function setup () {
    // one time initial work
    createCanvas(700, 500)
}

function draw () {
    if (drawing === 1) {
        background(255, 255, 255)
        //console.log("now stick")
    } else if (drawing === 2) {
        background(0, 0, 0)
        //console.log("now godzilla")
    } else {
        background(255, 0, 0)
    }


    
}

stickEl.addEventListener("click", stickClick)
zillaEl.addEventListener("click", zillaClick)

//goals:
//button switching them
//dancing stick figure
//godzilla attacking a stick figure