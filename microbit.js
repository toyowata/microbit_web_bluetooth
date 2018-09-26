let count = 0
bluetooth.onBluetoothConnected(() => {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(() => {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, () => {
    count += 1
    bluetooth.uartWriteNumber(count)
})
input.onButtonPressed(Button.B, () => {
    count += -1
    bluetooth.uartWriteNumber(count)
})
bluetooth.startUartService()
count = 0
