'use strict';

/* 
made adjustments based on source demo
http://benjaminewhite.github.io/jquery-streetfighter-example/index.html

version with comments see: app-comments.js
*/


$(document).ready(function() {
  intro();
  playGame();
});

var hover = false;

function playGame() {

  // EVENT 1
  $('.ryu').mouseenter(function() {
    hover = true;
    $('.ryu-pose').hide(); 
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    hover = false;
    $('.ryu-pose').hide();
    $('.ryu-still').show();
  });

  // EVENT 2
  $('.ryu').mousedown(function() { 
    playHadouken();
    $('.ryu-pose').hide();
    $('.ryu-throwing').show();

    $('.hadouken').finish().show().animate(
      {'left': '1020px'}, 
      500, 
      function() {  
        $('.hadouken').hide();
        $('.hadouken').css('left', '530px'); 
      }
    );
  })
  .mouseup(function() {
    $('.ryu-pose').hide();
    $('.ryu-ready').show();

  });
  
  // EVENT 3
  $(document).keydown(function(event) {
    if(event.which === 88) {
      playCool();
      $('.ryu-pose').hide();
      $('.ryu-cool').show();
    }
    console.log(event.type + ': ' + event.which);
  })
  .keyup(function(e) { 
    if(e.which === 88) { 
      $('#cool-sound')[0].pause();
      $('#cool-sound')[0].load();
      $('.ryu-pose').hide();
      if (hover) { 
        $('.ryu-ready').show();
      } else {
        $('.ryu-still').show();
      }
    }
  });
}

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playCool() {
  $('#cool-sound')[0].play();
}

function intro() {


}