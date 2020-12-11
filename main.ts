input.onGesture(Gesture.TiltLeft, function () {
    Car.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Car.change(LedSpriteProperty.X, 1)
})
let Enemy_Car: game.LedSprite = null
let Car: game.LedSprite = null
Car = game.createSprite(0, 4)
game.setScore(0)
basic.forever(function () {
    Enemy_Car = game.createSprite(2, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(400)
        Enemy_Car.change(LedSpriteProperty.Y, 1)
    }
    if (Enemy_Car.isTouching(Car)) {
        game.gameOver()
    } else {
        game.addScore(1)
        Enemy_Car.delete()
    }
})
