namespace gamejam {
    let counter:number
    let handlers:(()=>void)[] = []

    export function registerRoom(handler :()=>void) {
        handlers.push(handler)
    }

    export function startGameJam() {
        counter = 0
        handlers[0]()
    }

    //%block
    export function roomFinished(win:boolean) {
        if (!win) {
            // restart current room
            console.log("room " + (counter +1) + " failed, restart room.")
            handlers[counter]()
        } else {
            if (counter == handlers.length - 1) {
                console.log("all rooms won.")
                game.over(true)
            } else {
                console.log("room " + (counter + 1) + " won.")
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
