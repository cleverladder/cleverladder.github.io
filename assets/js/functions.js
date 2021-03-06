$( document ).ready(function() {

  // 
  scrollSoSmooth();
  workBelt();
  workLoad();
  validateForm();
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


// ScrollSoSmooth function is applied from the document ready function
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
    $('.work-sock').hide(800);
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

function validateForm() {

  $("#contact-form").validate({
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/hello@cleverladder.com", 
        method: "POST",
        data: {
          name: $(form).find("input[name='name']").val(),
          _replyto: $(form).find("input[name='_replyto']").val(),
          message: $(form).find("textarea[name='message']").val()
        },
        dataType: "json",
        success: function() {
          $("#submit-success").fadeIn();
          $("#contact-form").fadeOut();
        },
        error: function() {
          $("#submit-errors").fadeIn();        
        }
      });
    }
  });
}