/*Preloader*/

console.log("Your index.js file is loaded correctly!");

function fade(){
    $(".preloader").fadeOut("slow");
}
setTimeout(fade, 4000);

/*Button Change Color Hover State */

$('.right button').on("mouseenter", function(){
    $('.right button').css("background-color", "#0092BF"
    );
  });

  $('.right button').on("mouseleave", function(){
    $('.right button').css("background-color", "#00698A"
    );
  });

  $('#button1').on("mouseenter", function(){
    $('#button1').css("background-color", "#0092BF"
    );
  });

  $('#button1').on("mouseleave", function(){
    $('#button1').css("background-color", "#00698A"
    );
  });

  $('#button2').on("mouseenter", function(){
    $('#button2').css("background-color", "#0092BF"
    );
  });

  $('#button2').on("mouseleave", function(){
    $('#button2').css("background-color", "#00698A"
    );
  });

  $('#button3').on("mouseenter", function(){
    $('#button3').css("background-color", "#0092BF"
    );
  });

  $('#button3').on("mouseleave", function(){
    $('#button3').css("background-color", "#00698A"
    );
  });
  