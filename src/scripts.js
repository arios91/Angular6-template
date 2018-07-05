var $header = $('.header-fixed'),
      $headerTop = $header.offset().top,
      $headerHeight = $header.innerHeight(),
      $wrapper = $('#wrapper');

  $(window).scroll(function () {
    var $scrollTop = $(window).scrollTop();

    if($scrollTop > 1) {
      $header.addClass('sticky-header');
      }
      else {
      $header.removeClass('sticky-header');
    }
  });
  
  // Animate Smooth Scroll
  $('#homeLink').on('click', function() {
    const target = $('#home').position().top;

    $('html, body').animate(
      {
        scrollTop: target
      },
      900
    );
  });
  $('#aboutLink').on('click', function() {
    const target = $('#about').position().top;

    $('html, body').animate(
      {
        scrollTop: target
      },
      900
    );
  });
  $('#portfolioLink').on('click', function() {
    const target = $('#portfolio').position().top;

    $('html, body').animate(
      {
        scrollTop: target
      },
      900
    );
  });
  $('#servicesLink').on('click', function() {
    const target = $('#services').position().top;

    $('html, body').animate(
      {
        scrollTop: target
      },
      450
    );
  });