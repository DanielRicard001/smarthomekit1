let bruit = 0
let lumiere = 0
led.enable(false)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    lumiere = smarthome.ReadLightIntensity(AnalogPin.P3)
    if (lumiere < 50) {
        bruit = smarthome.ReadNoise(AnalogPin.P2)
        if (bruit > 70) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(2000)
        }
    }
})
