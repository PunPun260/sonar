let _1 = 0
basic.forever(function () {
    _1 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    serial.writeValue("x", _1)
    if (_1 < 80) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    if (_1 > 35) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (_1 > 30) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (_1 > 25) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (_1 > 20) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (_1 > 15) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (_1 > 10) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (_1 > 5) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    basic.pause(250)
})
