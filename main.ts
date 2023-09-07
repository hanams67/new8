let radio2 = 0
let _ = 0
radio.onReceivedNumber(function (receivedNumber) {
    radio2 = radio2
})
datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Heart)
    _ = input.lightLevel()
    datalogger.deleteLog()
})
radio.onReceivedString(function (receivedString) {
    radio2 = radio2
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 2; index++) {
        break;
    }
    basic.showLeds(`
        # # # # #
        # . # . #
        . # . # .
        # # # # #
        # # . # #
        `)
    for (let index = 0; index <= 2; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            # # # # #
            # # # # #
            `)
        break;
continue;
    }
})
