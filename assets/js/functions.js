$( document ).ready(function() {

  // 
  scrollSoSmooth();
  workBelt();
  workLoad();
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


// crollSoSmooth function is applied from the document ready function
  function scrollSoSmooth (duration) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
  }


function workBelt() {

  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-sock label').click(function() {
    $('.work-shift').addClass("slided");
    $('.work-sock').show();
  });

  $('.work-return').click(function() {
    $('.work-shift').removeClass("slided");
    $('.work-sock').hide(800);
  });
  $('.project-title').click(function() {
    $('.work-shift').removeClass("slided");
    $('.work-sock').show();
  });

}

function  workLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-sock label').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFolder = $this.find('.thumb-unit').data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newFolder;

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });

}