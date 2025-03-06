music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
basic.showString("PLAY")
basic.forever(function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . # . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # # # #
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . #
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . # #
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . # # #
        . . # . .
        . . . . .
        `)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # # .
        . . # . .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # . . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # . . . .
        # . . . .
        # # . . .
        `)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        # # # . .
        # . . . .
        # . . # .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # . . . .
        # . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # . . # .
        . . . # .
        . . . . .
        `)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        # # # # .
        . . # # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # # .
        . . . # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(200)
    music.play(music.stringPlayable("C5 B A F E C D E ", 100), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("E D D E C D E D ", 100), music.PlaybackMode.InBackground)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
    }
})
