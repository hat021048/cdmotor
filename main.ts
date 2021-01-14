basic.showIcon(IconNames.Yes)
let dutyon = 100
let dutyoff = 50
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(dutyon)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(dutyoff)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(dutyon)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(dutyoff)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(dutyon)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(dutyoff)
})
