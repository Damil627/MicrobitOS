input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(10)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(10)
    basic.showIcon(IconNames.Sad)
})
