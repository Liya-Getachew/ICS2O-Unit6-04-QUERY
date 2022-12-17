// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Dec 16 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-QUERY/sw.js", {
    scope: "/ICS2O-Unit6-04-QUERY/",
  })
}

window.onload = function () {
  /**
   * This function calculates the volume of a sphere.
   */

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("r")
  console.log(radius)

  // process
  const volume = (4.0 / 3.0) * Math.PI * Math.pow(radius, 3)
  const dimensions = "radius = " + radius

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML =
    "<br>Volume = " + volume.toFixed(2) + " cm³"
}
