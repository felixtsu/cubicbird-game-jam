// Add your code here
namespace foobar1 {
   export function init() {
        let projectile: Sprite = null
        let mySprite: Sprite = null
                controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . 3 . . . . . . . .
                . . . . . . . 3 . . . . . . . .
                . . . . . . . 3 . . . . . . . .
                . . . . . . . 3 . . . . . . . .
                . . . . . . . 3 . . . . . . . .
                . . . . . . 3 3 3 . . . . . . .
                . . 3 3 3 3 3 3 3 . . . . . . .
                . . . . . . 3 3 3 3 3 3 3 3 . .
                . . . . . . . 3 3 . . . . 3 3 3
                . . . . . . . . 3 . . . . . . .
                . . . . . . . . 3 . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, mySprite, 50, 50)
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
            otherSprite.destroy()
            info.changeLifeBy(1)
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
            sprite.destroy()
            otherSprite.destroy()
            info.changeScoreBy(1)
        })

        mySprite = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . .
            . . . . . f 5 5 5 f f . . . . .
            . . . . f 1 5 2 5 1 6 f . . . .
            . . . f 1 6 6 6 6 6 1 6 f . . .
            . . . f 6 6 f f f f 6 1 f . . .
            . . . f 6 f f d d f f 6 f . . .
            . . f 6 f d f d d f d f 6 f . .
            . . f 6 f d 3 d d 3 d f 6 f . .
            . . f 6 6 f d d d d f 6 6 f . .
            . f 6 6 f 3 f f f f 3 f 6 6 f .
            . . f f d 3 5 3 3 5 3 d f f . .
            . . f d d f 3 5 5 3 f d d f . .
            . . . f f 3 3 3 3 3 3 f f . . .
            . . . f 3 3 5 3 3 5 3 3 f . . .
            . . . f f f f f f f f f f . . .
            . . . . . f f . . f f . . . . .
        `, SpriteKind.Player)
        controller.moveSprite(mySprite)
        let enemySprite = sprites.create(img`
            e e e . . . . e e e . . . .
            c d d c . . c d d c . . . .
            c b d d f f d d b c . . . .
            c 3 b d d b d b 3 c . . . .
            f b 3 d d d d 3 b f . . . .
            e d d d d d d d d e . . . .
            e d f d d d d f d e . b f b
            f d d f d d f d d f . f d f
            f b d d b b d d 2 f . f d f
            . f 2 2 2 2 2 2 b b f f d f
            . f b d d d d d d b b d b f
            . f d d d d d b d d f f f .
            . f d f f f d f f d f . . .
            . f f . . f f . . f f . . .
        `, SpriteKind.Enemy)
        enemySprite.setPosition(110, 90)
        let foodSprite = sprites.create(img`
            . . . . . . . e c 7 . . . . . .
            . . . . e e e c 7 7 e e . . . .
            . . c e e e e c 7 e 2 2 e e . .
            . c e e e e e c 6 e e 2 2 2 e .
            . c e e e 2 e c c 2 4 5 4 2 e .
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
            . e e e 2 2 2 2 2 2 2 2 2 4 e .
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
            . . 2 e e 2 2 2 2 2 4 4 2 e . .
            . . . 2 2 e e 4 4 4 2 e e . . .
            . . . . . 2 2 e e e e . . . . .
        `, SpriteKind.Food)
        foodSprite.setPosition(50, 90)
        game.onUpdate(function () {
            if (info.score() == 1) {
                game.over(true)
            }
        })
            }
   

}

