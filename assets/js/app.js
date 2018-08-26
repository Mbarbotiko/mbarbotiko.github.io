$(document).ready(function () {

  checkSize();
  $(window).resize(checkSize);

  function checkSize() {
    if ($(window).width() <= 800) {



      $('.project-card-container').click(function (event) {
        event.stopPropagation();
        $('.overlay-button').toggle();
        
        $('.overlay').toggle();
      });

      $(document).click(function () {
        $('.overlay-button').hide();
        $('.overlay').hide();
      });

    }

  }

});

