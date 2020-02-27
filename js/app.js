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



// `$(document).ready(function(){})` is an event handler that listens for the page to be ready. 
// Once the page has loaded everything and is ready, the function you passed in — referred to as the callback function — is stored in the browser's memory...
$(document).ready(function() {

  // EVENT 1
  // Select the DOM element with the class ryu
  // and attach an new event handler .mouseenter to it
  // Every time the event happens, the browser invokes the callback function from its memory in response to the event. 
  // Cause and effect, event and callback function, respectively.
  $('.ryu').mouseenter(function() {
    // alert('mouse entered .ryu div');
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
    ///////////////
    // notice the "method chaining" 
    //
    // no need to explicitly preface another handler associated with `$('.ryu')`, but need to remove semi-colon closure from the  previous handler it's chained to.
    ///////////////
    .mouseleave(function() {
      $('.ryu-still').show();
      $('.ryu-ready').hide();
    })

  // EVENT 2
  // Ryu.onClick => 
  // Ryu-img throwing hadouken pose
  // + hadouken-img animated left-to-right
  // + sound effect
  // Ryu.onRelease => Ryu-img returns to ready position
  // Hint: listen to mousedown & mouseup click events
    .mousedown(function() {
      playHadouken();
      $('.ryu-ready').hide();
      $('.ryu-throwing').show();
      // note methods .animate() and .finish() 
      $('.hadouken').finish().show().animate(
        {'left': '1020px'}, // direction + end point
        800, // duration in milliseconds
        function() { // callback function 
          $('.hadouken').hide();
          $('.hadouken').css('left', '530px'); // reset position
        }
      );
    })
    .mouseup(function() {
      $('.ryu-ready').show();
      $('.ryu-throwing').hide();
    });
});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}