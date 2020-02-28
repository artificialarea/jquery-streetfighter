'use strict';

/* 
made adjustments based on source demo
http://benjaminewhite.github.io/jquery-streetfighter-example/index.html
*/


$(document).ready(function() {
  playGame();

});

var hover = false; // this is for determining which image to show after .keyup event (still img or ready?)


function playGame() {

  // EVENT 1
  $('.ryu').mouseenter(function() {
    hover = true;
    // alert('mouse entered .ryu div');
    $('.ryu-pose').hide(); // hide all images of ryu instead of targetings specific image(s), then instantaneously show the specific pose desired
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    ///////////////
    // NOTE: "method chaining" 
    //
    // no need to explicitly preface another handler associated with `$('.ryu')`, but need to remove semi-colon closure from the  previous handler it's chained to.
    ///////////////
    hover = false;
    $('.ryu-pose').show();
    $('.ryu-ready').hide();

  })
  .mousedown(function() { // EVENT 2
    playHadouken();
    $('.ryu-pose').hide();
    $('.ryu-throwing').show();
    // note methods .animate() and .finish() 
    $('.hadouken').finish().show().animate(
      {'left': '1020px'}, // direction + end point
      500, // duration in milliseconds
      function() { // callback function 
        $('.hadouken').hide();
        $('.hadouken').css('left', '530px'); // reset position
      }
    );
  })
  .mouseup(function() {
    $('.ryu-pose').hide();
    $('.ryu-ready').show();

  });
  
  // EVENT 3
  // Hint: The key code for "x" is 88.
    
  // attach to uber-element 'document' instead of 'body' element (which works, too)
  $(document).keydown(function(event) {
    console.log(event.type + ": " + event.which);
    // NOTE: `event.which` property 
    // which normalizes `event.keyCode` and `event.charCode` (and even `event.button` properties like `.mousedown` and `.mouseup` events). It is recommended to watch event.which for keyboard key input.
    if(event.which === 88) {
      playCool();
      $('.ryu-pose').hide();
      $('.ryu-cool').show();
    }
 
  })
  .keyup(function(e) { // syntax protocol: e === event
 
    if(e.which === 88) { 
      $('#cool-sound')[0].pause();
      $('#cool-sound')[0].load(); //  akin to stop, to reset the file so when .play() evoked again it starts from the beginning.
      $('.ryu-pose').hide();
      
      if (hover) { // aka hover === true
        $('.ryu-ready').show();
      } else {
        $('.ryu-still').show();
      }
    }


  });
  /*
    $('body').on('keyup', function(event) {
      console.log(event.type + ": " + event.which);
      $('#ryu-cool')[0].pause();
    });
    */
  
  //$('body').trigger(x);

}


function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load(); // resets sound to the beginning if needed
  $('#hadouken-sound')[0].play();
}

// source file had these Boolean conditions, but I don't know why?
//var coolSound = false;

function playCool() {
  $('#cool-sound')[0].play();
  // $('#cool-sound')[0].load(); 
  // ^^^^^ can't have .load() because if .keydown isn't released it keeps repeatedly loading the sound, so it never can play.
  
  /* 
  // source file had these Boolean conditions, but I don't know why?
  coolSound = !coolSound;  // => coolSound = true
  if (coolSound) {         // aka if coolSound === true
    $('#intro-theme')[0].pause();
    $('#cool-sound')[0].play();
  }
  */
}
