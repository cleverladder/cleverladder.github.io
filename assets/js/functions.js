$( document ).ready(function() {

  //


});

 $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

 $('.nav-link').click(function() {
   $(this).toggleClass('active');
  });