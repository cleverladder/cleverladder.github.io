$( document ).ready(function() {

  //


});

 $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
   $('.about-face').toggleClass('hide');
  });

 $('.nav-link').click(function() {
   $("#toggle").toggleClass('active');
   $('#overlay').toggleClass('open');
   $('.about-face').toggleClass('hide');
  });