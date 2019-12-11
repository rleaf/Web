$(document).ready(function() {

   $(window).scroll(function() {

      if ($(window).scrollTop() > 50) {
         $('.nav-bar').addClass('nav-bar-scrolled');
      } else {
         $('.nav-bar').removeClass('nav-bar-scrolled');
      }
   });

   let modal = $('.custom-modal-body')[0];

   // For X in the corner
   // $(document).on('click', '.modal-close', function() {
   //    console.log('toads');
   //    modal.style.display = 'none';
   // })

   modal.addEventListener('click', function() {
      this.style.display = 'none';
   });

   $(document).on('click', '.img-text', function() {
      // console.log('atads');
      let imageSrc = $(this).parents('.col-md-4').find('img').attr('src');
      console.log(imageSrc);

      $('.modal-content').attr('src', imageSrc);

      // $(this).toggleClass('active');
      modal.style.display = 'block';
      console.log('block');
   });
});

$(".contact-txt .copy").on("click", function(e) {
   console.log('weeeeee');
   e.preventDefault();
   $(this).find(".email").select();
   document.execCommand("copy");
   TweenMax.set($(this).find("span"), {
      y: 40,
      autoAlpha: 0
   });
   TweenMax.to($(this).find("span"), 2, {
      ease: reactive,
      y: 0,
      autoAlpha: 1
   });
   TweenMax.to($(this).find("span"), 2, {
      autoAlpha: 0,
      delay: 2
   });
});
