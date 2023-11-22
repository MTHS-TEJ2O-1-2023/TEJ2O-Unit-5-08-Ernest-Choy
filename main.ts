/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
  distanceToTarget = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
  // move forwards
  basic.showIcon(IconNames.Yes)
    if (distanceToTarget >= 10) {
      robotbit.StpCarTurn(10, 48)
    } 
    if (distanceToTarget < 10) {
      robotbit.StpCarTurn(-10, 48)
      robotbit.StpCarTurn(90, 10, 125)
    }
})