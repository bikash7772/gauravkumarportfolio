
$(window).on('scroll', function(){
   if ($(window).scrollTop() > 0) {
     $('header').addClass('fixed-header');
      }
   else {
     $('header').removeClass('fixed-header');
   };
});

