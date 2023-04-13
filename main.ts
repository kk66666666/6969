input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    sprite = 1
})
let _this: game.LedSprite = null
let sprite = 0
input.setSoundThreshold(SoundThreshold.Loud, 140)
let main = game.createSprite(2, 2)
loops.everyInterval(1000, function () {
    game.setScore(Math.trunc(input.runningTime() / 10000))
    if (input.lightLevel() < 160) {
        main.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    } else if (50 < input.acceleration(Dimension.Strength)) {
        main.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (1 == sprite) {
        main.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    } else {
        main.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
})
loops.everyInterval(input.temperature() * 100, function () {
    _this = game.createSprite(4, randint(0, 4))
    for (let index = 0; index < 4; index++) {
        basic.pause(randint(200, 500))
        _this.change(LedSpriteProperty.X, -1)
        if (_this.isTouching(main)) {
            game.gameOver()
        }
    }
    basic.pause(100)
    _this.delete()
})
