
var playerlength = 1;
let snake = []

kaboom();
loadSprite("frodo", "Frodo.jpg")  
for(let i = 1; i <= playerlength; i++){
    let segment = add([
    health(1),
    sprite("frodo"),
    area(),
    pos(100, 100),
    "snake"
    ])
    snake.push(segment)
    }

onKeyPress("up",() => {
    // Hier passiert jetzt etwas wie zum Beispiel:
    player.move(0,-10)
})
onKeyPress("left",() => {
    // Hier passiert jetzt etwas wie zum Beispiel:
    player.move(0,-10)
})
onKeyPress("down",() => {
    // Hier passiert jetzt etwas wie zum Beispiel:
    player.move(0,-10)
})
onKeyPress("right",() => {
    // Hier passiert jetzt etwas wie zum Beispiel:
    player.move(0,-10)
})

onCollide("player","border", (border) => {
    destroy(player)
    go("lose")
})
onCollide("player", "fruit", (fruit) => {
    playerlength++
})

let fruit = add([
    color(0, 255, 0),
    rect(25, 25),
    pos(),
])

            
    addLevel([
    "===============",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "=             =",
    "==============="

], {
    width: 38,
    height: 38,
    
    "=": () =>[
    rect(50,50),
    color(255,0,0),
    area(),
    "border"
    ],
})
