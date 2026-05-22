input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("G E G - G E G - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A G F E D E F - ", 120), music.PlaybackMode.UntilDone)
})
basic.showNumber(67)
basic.showString("ROBLOX")
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # . . . #
        # # # . #
        # . # . #
        # # # . #
        `)
    basic.showLeds(`
        # # . # #
        . # . # .
        # # . # #
        # . . . #
        # # . # #
        `)
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # . #
        . . # . #
        . . # . #
        `)
})
basic.forever(function () {
    led.setBrightness(255)
})
