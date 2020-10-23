function setup() {
    createCanvas(800, 400)
}

function draw() {
    background(100)

    fill("hotpink")
    noStroke()

    for (i=62.5;i<=337.5;i+=25) {
        ellipse(400, i, 25, 25)
    }
}