// Add your code here
namespace cubicbird_gamejam_titlescreen {
    function drawBackground() {
        scene.backgroundImage().fill(13)     
        scene.backgroundImage().drawTransparentImage(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . .
            . . . . . . 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . .
            . . . . . 5 5 4 4 4 4 4 f f 4 4 4 4 4 4 4 4 4 4 4 . . . . . . .
            . . . . 5 5 5 4 4 4 4 4 f f 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 .
            . . . 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 . .
            . . 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 . . .
            . 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 . . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 . . . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 4 . . . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 9 4 4 . . . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 4 4 4 . . . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 9 9 4 4 4 4 . . . . . . .
            . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 9 4 4 4 4 4 . . . . . . .
            . . . . . . . 9 9 9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . .
            . . . . . . . . 9 9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . .
            . . . . . . . . . 9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . .
            . . . . . . . . . . 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . .
            . . . . . . . . . . . 9 9 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . .
            . . . . . . . . . . . . 9 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `, 64, 8)  
    }

    function drawTriangle() {
        scene.backgroundImage().drawLine(80 - image.font8.charWidth * 9, 50 + image.font8.charHeight, 80 + image.font8.charWidth * 9, 50 + image.font8.charHeight, 2)
        for (let i = 80 - image.font8.charWidth * 9; i <= 80 + image.font8.charWidth * 9; i+=image.font8.charWidth * 2) {
            scene.backgroundImage().drawLine(80, 50 + image.font8.charHeight + 10, i, 50 + image.font8.charHeight, 2)
        }
    }

    function drawThemeBox(length:number) {
        let half = length / 2
        scene.backgroundImage().fillRect(80 - image.font8.charWidth * half - 1, 69, image.font8.charWidth * length + 2, image.font8.charHeight + 2, 12)
        scene.backgroundImage().fillRect(80 - image.font8.charWidth * half, 70, image.font8.charWidth * length, image.font8.charHeight, 1)
    }

    export function drawIntro(gamejamTheme:string) {  
        drawBackground()
        scene.backgroundImage().printCenter('Cubicbird Game Jam', 50, 2, image.font8)

        drawTriangle()
        drawThemeBox(gamejamTheme.length)

        scene.backgroundImage().printCenter(' -- ' + gamejamTheme + ' -- ', 70, 12, image.font8)
        

        scene.backgroundImage().printCenter('Press Any Button', 90, 2, image.font8)
        game.waitAnyButton()
        scene.backgroundImage().fill(0)
    }
}