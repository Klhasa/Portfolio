(function ($) {
  "use strict";

  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function () {
    $(".scroll").on('click', function () {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, 50);
      return false;
    })
  });

  // back to top - end
  // --------------------------------------------------



  // preloader - start
  // --------------------------------------------------
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () { $(this).remove(); });
  });
  // preloader - end
  // --------------------------------------------------



  /*form validation and mailto*/
  var forms = document.querySelectorAll('.needs-validation');

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        
        form.classList.add('was-validated');


        if (form.checkValidity()) {
          event.preventDefault();
          let name = document.getElementById("name").value.trim();
          let message = document.getElementById("message").value.trim();

          let mailtoLink = `mailto:info@hyperware.io?subject=Messaggio da ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

          window.location.href = mailtoLink;
        }
      }, false);


      Array.prototype.slice.call(form.elements).forEach((input) => {
        input.addEventListener('input', () => {
          if (input.checkValidity()) {
            input.classList.remove('is-invalid');
            if (input.value !== '' && input.value.length >= 3) {
              input.classList.add('is-valid');
            }
            else {
              input.classList.remove('is-valid');
              input.classList.add('is-invalid');
            }
          } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
          }
        });

        if (input.type === 'email') {
          input.addEventListener('input', () => {
            if (input.checkValidity() && input.value !== '' && emailPattern.test(input.value)) {
              input.classList.add('is-valid');
              input.classList.remove('is-invalid');
            } else {
              input.classList.remove('is-valid');
              input.classList.add('is-invalid');
            }
          });
        }
      });
    });

  /*AOS set up*/
  AOS.init({
    duration: 1200,
    mirror: false,
    once: true,
    disable: 'mobile'
  })


})(jQuery);
