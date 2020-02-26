'use strict';

// PSEUDOCODE it first. outline the user experience and conditions.

// page loads, Ryu-img is standing still
    // sequence of titlecard fade in/outs

// EVENT 1
// Ryu:hover (with mouse) => Ryu-img gif anime of ready position
// if no longer Ryu:hover => Ryu-img returns to standing still
// Hint: listen to mouseenter & mouseleave events


// EVENT 2
// Ryu.onClick => 
    // Ryu-img throwing hadouken pose
    // + hadouken-img animated left-to-right
    // + sound effect
// Ryu.onRelease => Ryu-img returns to ready position
// Hint: listen to mousedown & mouseup click events


// EVENT 3
// key('x').onPress => 
    // Ryu-img cool pose
    // + sound effect
// key('x').onRelease => Ryu-img returns to ready pose + sound effect off
// Hint: listen for keydown & keyup events


// HINTS
// Ryu image animation via `.hide()` & `.show()` methods