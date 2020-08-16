namespace gamejam {

    let counter = 0

    //%block
    export function roomFinished(win:boolean) {
        if (counter == 0) {
            foobar2.init()
            counter += 1
        } else {
            game.over(win)
        }
    }

}
