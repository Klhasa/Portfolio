$(window).on('load', function () {
  $('#preloader').fadeOut('slow', function () { $(this).remove(); });
});

let lastClickedCard = null;

function toggleArrow(clickedCard) {
  const isMobile = window.innerWidth <= 767;

  if (lastClickedCard && lastClickedCard !== clickedCard) {
    const lastArrow = lastClickedCard.querySelector('.forword-arrow i');
    lastArrow.classList.remove('rotate');
  }

  const arrow = clickedCard.querySelector('.forword-arrow i');
  arrow.classList.toggle('rotate');

  if (!isMobile) {
    lastClickedCard = clickedCard === lastClickedCard ? null : clickedCard;
  }
}

const backToTopBtn = document.getElementById('backToTopBtn');

function checkScroll() {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
    backToTopBtn.style.opacity = "1";
  } else {
    backToTopBtn.style.opacity = "0";
  }
}

document.addEventListener("DOMContentLoaded", checkScroll);
window.addEventListener("scroll", checkScroll);

backToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

$(document).ready(function () {
  function initOwlCarousel(selector) {
    $(selector).owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      onInitialized: function () {
        updateAriaLabels();
      },
      onChanged: function () {
        updateAriaLabels();
      },
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        700: { items: 2 },
        991: { items: 3 }
      }
    });
  }

  function updateAriaLabels() {
    $(".owl-item").each(function (index) {
      if ($(this).hasClass('active')) {
      } else {
        $(this).attr("aria-label", "Vai alla Card " + (index + 1));
      }
      $('.owl-dot').attr('aria-label', 'dot');
    });
  }

  initOwlCarousel("#owl-legal");
  initOwlCarousel("#owl-consulting");
  initOwlCarousel("#owl-mobile-legal");

  const magicBtn = document.getElementById("magic-btn");
  const magicBtn2 = document.getElementById("magic-btn2");
  const consulting = document.getElementById("it-consulting-section");
  const legalConsulting = document.getElementById("legal-consulting-section");
  const mobileLegalConsulting = document.getElementById("mobile-legal-consulting-section");


  const isMobile = window.innerWidth <= 767;


  if (magicBtn && magicBtn2 && consulting && legalConsulting) {
    magicBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (isMobile) {
        magicBtn.classList.toggle("selected");
      } else {
        magicBtn.classList.toggle("selected");
        magicBtn2.classList.remove("selected");
      }

      legalConsulting.classList.add("display-none");
      consulting.classList.toggle("display-none");
      consulting.classList.toggle("showMe");
      legalConsulting.classList.remove("showMe");

      setTimeout(() => {
        $("#owl-consulting").trigger("refresh.owl.carousel");
      }, 200);

    });


    magicBtn2.addEventListener("click", (e) => {
      e.preventDefault();

      if (isMobile) {
        magicBtn2.classList.toggle("selected");
      } else {
        magicBtn2.classList.toggle("selected");
        magicBtn.classList.remove("selected");
      }


      if (isMobile) {
        mobileLegalConsulting.classList.toggle("mobile-none");
      } else {
        consulting.classList.add("display-none");
        consulting.classList.remove("showMe");
        mobileLegalConsulting.classList.add("mobile-none");
        legalConsulting.classList.toggle("display-none");
        legalConsulting.classList.add("showMe");
      }
    });
  } else {
    console.error("Uno o più elementi non sono stati trovati nel DOM.");
  }

});


var forms = document.querySelectorAll('.needs-validation');

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let allValid = true;

      Array.prototype.slice.call(form.elements).forEach((input) => {
        if (input.value !== '' && input.value.length < 3) {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          allValid = false;
        } else if (input.value !== '' && input.value.length >= 3) {
          input.classList.add('is-valid');
          input.classList.remove('is-invalid');
        } else if (input.value === '') {
          input.classList.remove('is-valid');
          input.classList.remove('is-invalid');
        }

        if (input.type === 'email') {
          if (emailPattern.test(input.value)) {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
          } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            allValid = false;
          }
        }
      });


      if (allValid) {
        form.classList.add('was-validated');
        let name = document.getElementById("validationCustom01").value.trim();
        let subject = document.getElementById("validationCustom03").value.trim();
        let message = document.getElementById("validationCustom04").value.trim();
        let errMessage = document.getElementById("er-message");
        errMessage.innerHTML = "";

        let mailtoLink = `mailto:info@hyperware.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nome: " + name + "\n" + message)}`;

        window.location.href = mailtoLink;
      }
      else {
        let errMessage = document.getElementById("er-message");
        errMessage.innerHTML = "i campi non sono inseriti corettamente"
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
            allValid = false;
          }
        } else {
          input.classList.remove('is-valid');
          input.classList.add('is-invalid');
          allValid = false;
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
            allValid = false;
          }
        });
      }
    });
  });







