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

    export function registerRoom(handler :()=>void) {
        handlers.push(handler)
    }

    export function startGameJam() {
        counter = 0
        handlers = shuffle(handlers)
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
