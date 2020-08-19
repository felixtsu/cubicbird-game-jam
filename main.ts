namespace gamejam {
    let counter:number
    let handlers:(()=>void)[] = []

    function shuffle(array:(()=>void)[]) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    function drawIntro() {  
        scene.backgroundImage().fill(13)        
        scene.backgroundImage().printCenter('Cubicbird Game Jam', 50, 2, image.font8)
        scene.backgroundImage().printCenter(' -- Room -- ', 70, 12, image.font8)
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
        scene.backgroundImage().printCenter('Press Any Button', 90, 2, image.font8)
        game.waitAnyButton()
        scene.backgroundImage().fill(0)
    }

    export function drawNextRoom(author:string, roomTitle:string) {
        scene.backgroundImage().fill(13)        
        scene.backgroundImage().printCenter(author, 40, 2, image.font12)
        scene.backgroundImage().printCenter('presents', 60, 2, image.font8)
        scene.backgroundImage().printCenter(roomTitle, 80, 12, image.font12)
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
        scene.backgroundImage().printCenter('Press Any Button', 100, 2, image.font8)
        game.waitAnyButton()
        scene.backgroundImage().fill(0)
    }

    export function registerRoom(handler :()=>void) {
        handlers.push(handler)
    }

    export function startGameJam() {
        counter = 0
        handlers = shuffle(handlers)
        drawIntro()
        handlers[0]()
    }

    //%block
    export function roomFinished(win:boolean) {
        if (!win) {
            // restart current room
            handlers[counter]()
        } else {
            if (counter == handlers.length - 1) {
                game.over(true)
            } else {
                counter ++
                control.runInParallel(function() {
                    handlers[counter]()    
                })
            }
        }
    }

    //%block
    //% blockId=gamejamoninterval block="on game update every %period=timePicker ms"
    //% blockAllowMultiple=1
    export function onMyGameUpdateInterval(time :number, handler:()=>void) {
        let registerCounter = counter
        game.onUpdateInterval(time, function() {
            if (registerCounter == counter) {
                handler()
            }
        })
    }

}
