// Testo WELCOME
const welcomeText = document.querySelector("#welcome-text");
const text = "WELCOME!";
let index = 1;

setTimeout(typeText, 1000);

function typeText() {
  welcomeText.textContent = text.slice(0, index) + "|";
  if (index < text.length) {
    index++;
    const randomInterval = Math.floor(Math.random() * 350) + 50;
    setTimeout(typeText, randomInterval);
  } else {
    setTimeout(eraseText, 1300);
  }
}

function eraseText() {
  index--;
  welcomeText.textContent = text.slice(0, index) + "|";
  if (index > 0) {
    setTimeout(eraseText, 100);
  } else {
    setTimeout(typeText, 1500);
  }
}

// progress-bar

  $(document).ready(function() {
    // Funzione per animare le skillbars quando sono visibili
    function animateSkillbars() {
      var windowHeight = $(window).height();
      var windowTop = $(window).scrollTop();
      var skillbarTop = $('#skills').offset().top;

      if (windowTop + windowHeight > skillbarTop) {
        // Animiamo le skillbars solo una volta
        $('.skillbar-bar').each(function() {
          var $this = $(this);
          if (!$this.hasClass('animated')) { // Controlla se la barra è già animata
            var percentage = $this.parent().data('percent'); // Otteniamo la percentuale da data-percent
            $this.animate({
              width: percentage
            }, 1500); // 1500ms per l'animazione
            $this.addClass('animated'); // Impostiamo la classe per evitare che venga animata più volte
          }
        });
      }
    }

    // Controlliamo quando la pagina viene scrollata
    $(window).scroll(function() {
      animateSkillbars();
    });

    // Eseguiamo la funzione anche al caricamento della pagina, per assicurarsi che le skillbar vengano animate correttamente
    animateSkillbars();
  });




 