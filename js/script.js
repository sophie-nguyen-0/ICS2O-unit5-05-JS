// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unti5-05-JS/sw.js", {
    scope: "/ICS2O-unti5-05-JS/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const lengthA = parseFloat(document.getElementById("length-a").value)
  const lengthB = parseFloat(document.getElementById("length-b").value)
  const lengthC = parseFloat(document.getElementById("length-c").value)

  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))

  if (sumOfAngles == 180) {
    if (lengthA == lengthB && lengthB == lengthC && lengthA == lengthC) {
      document.getElementById("answers").innerHTML =
        "It's an equilateral triangle!"
    } else if (lengthA == lengthB || lengthB == lengthC || lengthA == lengthC) {
      document.getElementById("answers").innerHTML =
        "It's an isosceles triangle!"
    } else {
      document.getElementById("answers").innerHTML = "It's a scalene triangle!"
    }
  } else {
    document.getElementById("answers").innerHTML = "It's not a triangle!"
  }
}
