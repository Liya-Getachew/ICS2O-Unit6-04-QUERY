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

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
