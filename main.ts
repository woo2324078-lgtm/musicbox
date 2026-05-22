input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C C G G A A G - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F F E E D D C - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G G F F E E D - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G G F F E E D - ", 120), music.PlaybackMode.UntilDone)
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
