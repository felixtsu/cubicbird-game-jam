namespace gamejam {
    let counter:number
    // let handlers:(()=>void)[] = []
    let rooms:Room[] = []
    class Room {

        constructor(roomName:string, entryPoint:()=>void) {
            this.roomName = roomName
            this.roomEntryPoint = entryPoint
        }

        roomName :string;
        roomEntryPoint: (() => void)
    }

    function shuffle(array:Room[]) {
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

    function drawIntro() {  
        drawBackground()
        scene.backgroundImage().printCenter('Cubicbird Game Jam', 50, 2, image.font8)

        drawTriangle()

        scene.backgroundImage().fillRect(80 - image.font8.charWidth * 2 - 1, 69, image.font8.charWidth * 4 + 2, image.font8.charHeight + 2, 12)
        scene.backgroundImage().fillRect(80 - image.font8.charWidth * 2, 70, image.font8.charWidth * 4, image.font8.charHeight, 1)

        scene.backgroundImage().printCenter(' -- Room -- ', 70, 12, image.font8)
        
        scene.backgroundImage().printCenter('Press Any Button', 90, 2, image.font8)
        game.waitAnyButton()
        scene.backgroundImage().fill(0)
    }

    export function drawNextRoom(author:string, roomTitle:string) {
        drawBackground()
        scene.backgroundImage().printCenter(author, 40, 2, image.font12)
        scene.backgroundImage().printCenter('presents', 60, 2, image.font8)
        scene.backgroundImage().drawLine(80 - image.font8.charWidth * 4, 60 + image.font8.charHeight, 80 + image.font8.charWidth * 4, 60 + image.font8.charHeight, 2)
        scene.backgroundImage().printCenter(roomTitle, 80, 12, image.font8)
        scene.backgroundImage().printCenter('Press Any Button', 100, 2, image.font8)
        game.waitAnyButton()
        scene.backgroundImage().fill(0)
    }

    export function registerRoom(roomName:string, handler :()=>void) {
        rooms.push(new Room(roomName, handler))
        // handlers.push(handler)
    }

    export function startGameJam() {
        counter = 0
        rooms = shuffle(rooms)
        for (let room of rooms) {
            storyboard.registerScene(room.roomName, room.roomEntryPoint)
        }
        
        drawIntro()

        let firstRoom = rooms[0]
        firstRoom.roomEntryPoint()
    }

    //%block
    export function roomFinished(win:boolean) {
        // clear all scheduled run later tasks
        runLaterHandlers = {}
        control.runInParallel(function () {
        if (!win) {
            // restart current room
            // you die, try again
            storyboard.pop()
            storyboard.push(rooms[counter].roomName)
        } else {
            if (counter == rooms.length - 1) {
                game.over(true)
            } else {
                counter ++
                storyboard.replace(rooms[counter].roomName)
                    // rooms[counter].roomEntryPoint()    
                }
            }
        })
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

    let runLaterHandlers:SparseArray<boolean>={}

    export function runLater(time:number, handler:()=>void) {
        let genId = randint(0, 99999999999999999999999)
        runLaterHandlers[genId] = true;
        control.runInParallel(function() {
            pause(time)
            if(runLaterHandlers[genId]) {
                handler()
            }
        })
    }

}
