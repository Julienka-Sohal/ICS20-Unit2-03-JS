// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const houseName = document.getElementById("house-name").value
  const houseNumber = parseInt(document.getElementById("house-number").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + houseNumber + ", " + houseName + "."
}