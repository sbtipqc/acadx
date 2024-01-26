// LOAD JS [REQUIRED FOR ALL]

$(window).on('load', function() {
    function finishLoad() {
        window.location.href = "../flashcards.html";
    }
    window.setTimeout(finishLoad, 2500)
  })