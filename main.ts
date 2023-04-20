let _this: game.LedSprite = null
let main = game.createSprite(2, 2)
let lose = 0
let score = 0
game.setLife(5)
loops.everyInterval(1000, function () {
    if (main.isTouchingEdge()) {
        game.removeLife(1)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (lose == 5) {
        game.setScore(score)
        game.gameOver()
    }
})
loops.everyInterval(200, function () {
    if (input.lightLevel() < 50) {
        main.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    } else if (60 < input.acceleration(Dimension.Strength)) {
        main.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
})
loops.everyInterval(input.temperature() * 100, function () {
    _this = game.createSprite(4, randint(0, 4))
    for (let index = 0; index < 4; index++) {
        basic.pause(randint(50, 200))
        _this.change(LedSpriteProperty.X, -1)
        if (_this.isTouching(main)) {
            game.removeLife(1)
            basic.pause(500)
        }
    }
    basic.pause(100)
    _this.delete()
    score += 1
})
