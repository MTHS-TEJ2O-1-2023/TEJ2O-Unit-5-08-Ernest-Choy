/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Nov 2023
 * This program moves stepper motors
*/

// variables
let distanceToTarget: number = 0

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
    distanceToTarget = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
    // move forwards
    if (distanceToTarget > 10) {
      basic.showString(distanceToTarget.toString())
      robotbit.StpCarMove(10, 48)
    }
    if (distanceToTarget <= 10) {
      basic.showString(distanceToTarget.toString())
      robotbit.StpCarMove(-10, 48)
      robotbit.StpCarTurn(90, 48, 125)
    }
  }
}
